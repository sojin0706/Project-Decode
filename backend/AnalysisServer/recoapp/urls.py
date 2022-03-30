from django.urls import path
from . import views

appname = "recoapp"

urlpatterns = [
    path('', views.index),
    path('cb', views.CB),
    path('cf/<int:id>/<genre>/', views.CF),
    path('cf/<int:id>/<genre>/<gender>/<int:age>/', views.CF2),
]
