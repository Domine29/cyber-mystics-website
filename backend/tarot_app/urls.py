from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/', views.load_cards),
    path('api/signUp', views.register_user),
    path('api/login', views.login_user),
    path('api/logout', views.logout_user),
    path('api/user', views.current_user),
    path('api/reading', views.get_reading),
    # path('api/token/', TokenObtainPairView.as_view()),        look further into using JSON Web Tokens (JWTs) for sessions
    # path('api/token/refresh/', TokenRefreshView.as_view()),
    # path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    re_path(r'.*', views.index),
]