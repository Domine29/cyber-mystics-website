from django.db import models
from tarot_app.models import SiteUser

class Journal(models.Model):
    user = models.OneToOneField('tarot_app.SiteUser', on_delete=models.CASCADE)
    # table_of_contents = 

class DreamEntry(models.Model):
    journal = models.ForeignKey(Journal, on_delete=models.CASCADE)
    interpretation = models.TextField()
    ritual = models.TextField()

class DreamImage(models.Model):
    dream_entry = models.ForeignKey(DreamEntry, on_delete=models.CASCADE)
    description = models.TextField()
    associations = models.TextField()
    inner_dynamics = models.TextField()
