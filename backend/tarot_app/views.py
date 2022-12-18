from django.http import HttpResponse, JsonResponse
from tarot_app.models import *
from rest_framework.decorators import api_view
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response

def index(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(["GET"])
def load_cards(request):
    if request.method == "GET":
        cards = TarotCard.objects.all()
        cards_json = serializers.serialize('json', cards)

        return HttpResponse(cards_json)

@api_view(["POST"])
def register_user(request):
    if request.method == "POST":
        email = request.data['email']
        password = request.data['password']
        try:
            SiteUser.objects.create_user(email=email, password=password, username=email)
            return Response({'success': True})
        except Exception as e:
            print(e)
            return JsonResponse({'signup': False})

@api_view(["POST"])
def login_user(request):
    if request.method == "POST":
        email = request.data['email']
        password = request.data['password']
        user = authenticate(username=email, password=password)
        if user is not None:
            try:
                login(request._request, user)
                print(request.session)
                return JsonResponse({'success': True})
            except Exception as e:
                print(e)
                return JsonResponse({'logout': False})
        return JsonResponse({'logout': False})

def logout_user(request):
    try:
        logout(request)
        return JsonResponse({'logout' : True})
    except Exception as e:
        print(e)
        return JsonResponse({'logout' : False})

@api_view(["GET"])
def current_user(request):
    if request.user.is_authenticated:
        data = {request.user}
        return HttpResponse(data)
    else:
        return JsonResponse(None, safe=False)

@api_view(["POST"])
def get_reading(request):
    pass