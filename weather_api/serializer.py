from rest_framework import serializers
from .models import City

class CSerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'



class CitySerializer(serializers.Serializer):
    name = serializers.ListField(
    child = serializers.CharField(max_length = 25)
    )
