from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/', views.load_cards),
    re_path(r'.*', views.index),
]