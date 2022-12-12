# Generated by Django 4.1.4 on 2022-12-10 21:33

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tarot_app', '0002_remove_tarotcard_archetype_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='tarotcard',
            name='keywords',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), default=[], size=None),
        ),
        migrations.AddField(
            model_name='tarotcard',
            name='meanings',
            field=models.JSONField(default={}),
        ),
        migrations.AddField(
            model_name='tarotcard',
            name='questions_to_ask',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), default=[], size=None),
        ),
    ]
