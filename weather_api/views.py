#from django.shortcuts import render
from rest_framework.response import Response

def index(request):

    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=0871a0f9691204fa0330e5caf06aae69'
    city = 'Delhi'
    city_weather = requests.get(url.format(city)).json() #request the API data and convert the JSON to Python data types

    weather = {
        'city' : city,
        'temperature' : city_weather['main']['temp'],
        'description' : city_weather['weather'][0]['description'],
        'icon' : city_weather['weather'][0]['icon']
    }

    return Response({'weather' : weather})
#    return render(request, 'weather/index.html', context) #returns the index.html template
