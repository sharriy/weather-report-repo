from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework import viewsets, permissions
from rest_framework import filters
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer


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
    permission_classes = [
        permissions.AllowAny
    ]



def index(request):

    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=979e6d6c2ee9cf948cf55846d80718d1'
    cities = City.objects.all()
    serializer_class = serializer.CitySerializer

    weather_data = []

    for city in cities:

        city_weather = requests.get(url.format(city)).json()
        #city_serializer = serializer_class(city)

        weather = {
            'city':city_weather['name'] ,
            'temperature' : city_weather['main']['temp'],
            'description' : city_weather['weather'][0]['description'],
            'icon' : city_weather['weather'][0]['icon']
            }
        weather_data.append(weather)
    #context = {'weather_data' : weather_data}

    #obj = Weather(weather_data)
    #weather_serializer = serializer_class(obj)
    #weatherinfo = weather_serializer.data
    #return JsonResponse(weatherinfo)
    #return Response(weather_data)
    return JsonResponse(weather_data, safe=False)
