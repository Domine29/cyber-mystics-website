# Generated by Django 4.1.4 on 2022-12-25 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tarot_app', '0008_rename_orientation_cardinspread_reverse'),
    ]

    operations = [
        migrations.AddField(
            model_name='spread',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default='2022-12-25'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='spread',
            name='date_modified',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
