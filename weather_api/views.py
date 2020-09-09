#from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.renderers import JSONRenderer

import requests
import json

from .models import City
from .forms import CityForm
from weather_api import serializer

class Weather(object):
    def __init__(self, name):
        self.name = name

def index(request):

    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=0871a0f9691204fa0330e5caf06aae69'
    cities = City.objects.all() #return all the cities in the database

    serializer_class = serializer.CitySerializer


    if request.method == 'POST': # only true if form is submitted
        form = CityForm(request.POST) # add actual request data to form for processing
        form.save() # will validate and save if validate
    form = CityForm()

    weather_data = []

    for city in cities:

        city_weather = requests.get(url.format(city)).json() #request the API data and convert the JSON to Python data types

        weather = {
            'city' : city,
            'temperature' : city_weather['main']['temp'],
            'description' : city_weather['weather'][0]['description'],
            'icon' : city_weather['weather'][0]['icon']
        }
        weather_data.append(weather) #add the data for the current city into our list

    obj = Weather(weather_data)
    weather_serializer = serializer_class(obj)
    message = weather_serializer.data, {'form' : form}
    return JsonResponse(message, safe= False )
    # return render(request, 'weather/index.html', context) #returns the index.html template
