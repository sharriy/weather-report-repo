from rest_framework import serializers

class CitySerializer(serializers.Serializer):
    name = serializers.ListField(
    child = serializers.CharField(max_length = 25)
    )
