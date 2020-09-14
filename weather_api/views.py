#from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework import viewsets
from rest_framework import filters

import requests
import json

from .models import City
from weather_api import serializer
from . import urls

class Weather(object):
    def __init__(self, name):
        self.name = name


class CityViewSet(viewsets.ModelViewSet):
    serializer_class = serializer.CSerializer
    queryset = City.objects.all()
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name', )

    def create(self,request):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            name=serializer.validated_data.get('name')
            a = City(name=name)
            a.save()
            message = f'{name} City added'
            return Response({'message': message})
        else:
            return Response(
            serializer.errors,
            )


def index(request):

    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=0871a0f9691204fa0330e5caf06aae69'
    cities = City.objects.all()

    serializer_class = serializer.CitySerializer

    weather_data = []

    for city in cities:

        city_weather = requests.get(url.format(city)).json()
        weather = {
            'city' : city,
            'temperature' : city_weather['main']['temp'],
            'description' : city_weather['weather'][0]['description'],
            'icon' : city_weather['weather'][0]['icon']
        }
        weather_data.append(weather)

    obj = Weather(weather_data)
    weather_serializer = serializer_class(obj)
    weatherinfo = weather_serializer.data
    return JsonResponse({'weatherinfo': weatherinfo} )
