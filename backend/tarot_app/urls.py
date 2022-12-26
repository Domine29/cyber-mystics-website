from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/', views.load_cards),
    path('api/signUp', views.register_user),
    path('api/login', views.login_user),
    path('api/logout', views.logout_user),
    path('api/user', views.current_user),
    path('api/reading', views.get_reading),
    path('api/note', views.update_note),
    path('api/notes', views.get_user_notes),
    path('api/third_party', views.third_party_api),
    re_path(r'.*', views.index),
]