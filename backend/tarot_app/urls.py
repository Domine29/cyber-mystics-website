from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/', views.load_cards),
    path('api/signUp', views.register_user),
    re_path(r'.*', views.index),
]