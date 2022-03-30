from django.urls import path
from . import views

appname = "recoapp"

urlpatterns = [
    path('', views.index),
    path('cb', views.CB),
    path('cf', views.CF),
]
