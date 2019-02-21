from django.db import models

# Create your models here.


class State(models.Model):
    name = models.Charfield(max_length=25)

    def __str__(self):
        return self.name


class Sites(models.Model):
    name = models.Charfield(max_length=50)
    numDeliveries = models.IntegerField(max_length=50)
    totPurAmnt = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    state = models.ForeignKey(State, on_delete=models.CASCADE,
                              blank=True, null=True, related_name="sites")

    def __str__(self):
        return self.name


class Stores(models.Model):
    name = models.Charfield(max_length=25)
    location = models.Charfield(max_length=50)
    numDeliveries = models.IntegerField(max_length=50)
    state = models.ForeignKey(State, on_delete=models.CASCADE,
                              blank=True, null=True, related_name="stores")

    def __str__(self):
        return self.name
