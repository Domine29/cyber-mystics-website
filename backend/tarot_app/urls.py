from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/', views.load_cards),
    path('api/signUp', views.register_user),
    path('api/login', views.login_user),
    path('api/logout', views.logout_user),
    path('api/user', views.current_user),
    path('api/user/account',views.user_account),
    path('api/user/name',views.set_name),
    path('api/user/cell',views.set_cell),
    path('api/reading', views.get_reading),
    path('api/note', views.update_note),
    path('api/notes/<int:number>', views.get_user_notes),
    path('api/third_party', views.third_party_api),
    path('api/notes/delete_spread/<int:spread_id>', views.delete_spread),
    re_path(r'.*', views.index),
]