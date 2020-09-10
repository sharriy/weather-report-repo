from django.urls import path, include

from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('addcity', views.AddCityViewSet)

urlpatterns = [
    path('', views.index),
    path('',include(router.urls))
]
