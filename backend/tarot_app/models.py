from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField
from django.contrib.auth.models import AbstractUser

class SiteUser(AbstractUser):
    email = models.EmailField(max_length = 100, unique = True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class TarotCard(models.Model):
    name = models.TextField()
    number = models.IntegerField()
    arcana = models.TextField()
    suit = models.TextField()
    img = models.TextField()
    keywords = ArrayField(models.TextField(), default=list)
    meanings = JSONField(default=dict)
    questions_to_ask = ArrayField(models.TextField(), default=list)

class Spread(models.Model):
    user = models.ForeignKey(SiteUser, on_delete=models.CASCADE)
    type = models.TextField()

class CardInSpread(models.Model):
    spread = models.ForeignKey(Spread, on_delete=models.CASCADE)
    tarot_card = models.ForeignKey(TarotCard, on_delete=models.CASCADE)
    position = models.IntegerField()
    orientation = models.TextField()

class Note(models.Model):
    card_in_spread = models.ForeignKey(CardInSpread, on_delete=models.CASCADE)
    content = models.TextField()

class OverallNote(models.Model):
    spread = models.ForeignKey(Spread, on_delete=models.CASCADE)
    content = models.TextField()


    
