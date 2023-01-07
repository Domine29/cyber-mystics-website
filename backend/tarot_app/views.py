from django.http import HttpResponse, JsonResponse
from tarot_app.models import *
from rest_framework.decorators import api_view
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
import json
import requests


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
            SiteUser.objects.create_user(
                email=email, password=password, username=email)
            return JsonResponse({'success': True})
        except Exception as e:
            return HttpResponse("A user with that email already exists.", status=409)


@api_view(["POST"])
def login_user(request):
    if request.method == "POST":
        email = request.data['email']
        password = request.data['password']
        user = authenticate(username=email, password=password)
        print(user)
        if user is not None:
            try:
                login(request._request, user)
                print(request.session)
                return JsonResponse({'success': True})
            except Exception as e:
                print(e)
                return (HttpResponse("Invalid Credentials", status=401))
        return (HttpResponse("Invalid Credentials", status=401))


def logout_user(request):
    try:
        logout(request)
        return JsonResponse({'logout': True})
    except Exception as e:
        print(e)
        return JsonResponse({'logout': False})


@api_view(["GET"])
def current_user(request):
    if request.user.is_authenticated:
        data = {request.user}
        return HttpResponse(data)
    else:
        return JsonResponse(None, safe=False)


@api_view(["GET"])
def user_account(request):
    user = request.user
    accountDetails = {
        "first_name": None,
        "last_name": None,
        "email": None,
        "cell": None
    }
    for key, val in accountDetails.items():
        try:
            accountDetails[key] = getattr(user, f'{key}')
        except:
            accountDetails[key] = None

    return JsonResponse(accountDetails)


@api_view(["POST"])
def get_reading(request):
    user = request.user
    card_name = request.data['card']
    reverse = request.data['reverse']
    if request.user.is_authenticated:

        card = TarotCard.objects.get(name=card_name)
        user = SiteUser.objects.get(username=user)

        spread = Spread(user=user, type="Single Card")
        spread.save()

        card_in_spread = CardInSpread(
            spread=spread, tarot_card=card, position=1, reverse=reverse)
        card_in_spread.save()

        note = Note(card_in_spread=card_in_spread,
                    description="", interpretation="")
        note.save()

        data = {
            'spread_type': spread.type,
            'position': card_in_spread.position,
            'reverse': card_in_spread.reverse,
            'tarot_name': card.name,
            'number': card.number,
            'arcana': card.arcana,
            'suit': card.suit,
            'img': card.img,
            'keywords': card.keywords,
            'questions_to_ask': card.questions_to_ask,
            'note_id': note.pk,
            'note_description': note.description,
            'note_interpretation': note.interpretation

        }

        response_data = json.dumps(data)

        return HttpResponse(response_data, content_type='application/json')

    return JsonResponse({'success': False})


@api_view(["PUT"])
def update_note(request):
    description = request.data['description']
    interpretation = request.data['interpretation']
    note_id = request.data['note_id']
    Note.objects.filter(pk=note_id).update(
        description=description, interpretation=interpretation)
    return JsonResponse({'success': True})


@api_view(["GET"])
def third_party_api(request):

    res_quote = requests.get('https://zenquotes.io/api/random').json()
    quote = res_quote[0]['q']

    res_cat = requests.get('https://api.thecatapi.com/v1/images/search').json()
    cat = res_cat[0]['url']

    data = {'quote': quote, 'cat': cat}
    response_data = json.dumps(data)

    return HttpResponse(response_data)


@api_view(["GET"])
def get_user_notes(request, number):
    if request.user.is_authenticated:
        user = SiteUser.objects.get(username=request.user)

        spreads = Spread.objects.filter(user=user).order_by('-date_created')

        if not spreads:
            return (HttpResponse("No user spreads created", status=404))

        active_spread = spreads[number]
        card_in_spread = CardInSpread.objects.get(spread=active_spread.pk)
        card = card_in_spread.tarot_card
        active_note = Note.objects.get(card_in_spread=card_in_spread)

        spreads_length = len(spreads)

        data = {
            'spread_id': active_spread.pk,
            'number_of_notes': spreads_length,
            'tarot_name': card.name,
            'position': card_in_spread.position,
            'reverse': card_in_spread.reverse,
            'img': card.img,
            'keywords': card.keywords,
            'questions_to_ask': card.questions_to_ask,
            'note_id': active_note.pk,
            'note_description': active_note.description,
            'note_interpretation': active_note.interpretation
        }

        response_data = json.dumps(data)

        return HttpResponse(response_data)

    return JsonResponse({'success': False})


@api_view(["DELETE"])
def delete_spread(request, spread_id):
    spread_to_delete = Spread.objects.get(pk=spread_id)
    spread_to_delete.delete()

    return JsonResponse({'success': True})
