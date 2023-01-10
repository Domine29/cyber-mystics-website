from django.db import models
from tarot_app.models import *


class DreamEntry(models.Model):
    user = models.EmailField()
    date = models.DateField(auto_now_add=True)
    description = models.TextField()
    associations = models.TextField()
    inner_dynamics = models.TextField()
    interpretation = models.TextField()
    ritual = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


# class DreamImage(models.Model):
#     dream_entry = models.ManyToManyField(DreamEntry)
