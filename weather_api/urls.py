from django.urls import path, include
from weather_api import serializer
from rest_framework.routers import DefaultRouter
from . import views
from .models import City

router = DefaultRouter()
router.register('citylist', views.CityViewSet)

urlpatterns = [
    path('weathers/', views.index),
    path('',include(router.urls))
]
