from rest_framework import serializers
from weather_api import models

class CSerializer(serializers.Serializer):
    name = serializers.CharField(max_length = 25)



class CitySerializer(serializers.Serializer):
    name = serializers.ListField(
    child = serializers.CharField(max_length = 25)
    )
