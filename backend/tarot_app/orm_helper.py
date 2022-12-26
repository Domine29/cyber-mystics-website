from tarot_app.models import SiteUser, Spread, TarotCard, CardInSpread, Note, SiteUser

def create_tarot_reading(user, card_name, orientation):
    card = TarotCard.objects.get(name=card_name)
    user = SiteUser.objects.get(username=user)

    spread = Spread(user=user, type="Single Card")
    spread.save()

    card_in_spread = CardInSpread(spread=spread, tarot_card=card, position=1, orientation=orientation)
    card_in_spread.save()

    note = Note(card_in_spread=card_in_spread, description="", interpretation="")
    note.save()

    # return (
    #     {
    #         'card_in_spread': spread.cardinspread_set.all(),
    #         'tarot_card': card_in_spread.tarotcard_set.all(),
    #         'note': note
    #     }
    # )
