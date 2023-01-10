from rest_framework import serializers
from .models import *


class DreamEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = DreamEntry
        fields = ['id', 'user', 'date', 'description', 'associations',
                  'inner_dynamics', 'interpretation', 'ritual']
