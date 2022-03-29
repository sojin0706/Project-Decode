from django.urls import path
from . import views

appname = "recoapp"

urlpatterns = [
    path('', views.index),
]
