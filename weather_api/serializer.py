from rest_framework import serializers
from weather_api import models

class CitySerializer(serializers.Serializer):
    name = serializers.ListField(
    child = serializers.CharField(max_length = 25)
    )

class AddCitySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.City
        fields = ('name',)

    def create(self, validated_data):
        city=models.City.objects.add_city(name = validated_data['name'])
        return city
