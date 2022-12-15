from django.http import HttpResponse, JsonResponse
from tarot_app.models import *
from rest_framework.decorators import api_view
from django.core import serializers

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
    SiteUser.objects.filter(pk=1).delete()
    if request.method == "POST":
        email = request.data['email']
        password = request.data['password']
        try:
            # SiteUser.objects.create(email=email, password=password)
            SiteUser.objects.filter(email='test@test').delete()
            return JsonResponse({'success': True})
        except Exception as e:
            print(e)
            return JsonResponse({'signup': False})