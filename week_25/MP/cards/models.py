from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    amount_of_money = models.IntegerField(default=1000)
    points = models.IntegerField(default=0)

class Card(models.Model):
    name_character = models.CharField(max_length=200)
    species = models.CharField(max_length=100)
    house = models.CharField(max_length=100)
    image_url = models.URLField()
    date_of_birth = models.DateField(null=True)
    patronus = models.CharField(max_length=100)
    price = models.IntegerField()
    xp_points = models.IntegerField()
    current_owner = models.ForeignKey(User, related_name='owned_cards', on_delete=models.SET_NULL, null=True)
    previous_owner = models.ForeignKey(User, related_name='previous_cards', on_delete=models.SET_NULL, null=True)
