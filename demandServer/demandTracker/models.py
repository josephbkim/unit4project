from django.db import models
from datetime import date

# Create your models here.


class State(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name


class Sites(models.Model):
    name = models.CharField(max_length=50)
    numDeliveries = models.IntegerField
    totPurAmnt = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    state = models.ForeignKey(State, on_delete=models.CASCADE,
                              blank=True, null=True, related_name="sites")

    def __str__(self):
        return self.name


class Stores(models.Model):
    name = models.CharField(max_length=25)
    storeLocation = models.CharField(max_length=50)
    storeLong = models.DecimalField(max_digits=9, decimal_places=6)
    storeLat = models.DecimalField(max_digits=9, decimal_places=6)
    numDeliveries = models.IntegerField
    state = models.ForeignKey(State, on_delete=models.CASCADE,
                              blank=True, null=True, related_name="stores")

    def __str__(self):
        return self.name


class Deliveries(models.Model):
    date = models.DateField(("Date"), default=date.today)
    delAddress = models.CharField(max_length=50)
    delLong = models.DecimalField(max_digits=9, decimal_places=6)
    delLat = models.DecimalField(max_digits=9, decimal_places=6)
    purAmount = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    store = models.ForeignKey(
        Stores, on_delete=models.CASCADE, blank=True, null=True, related_name="deliveries")

    def __str__(self):
        return self.date


class Customers(models.Model):
    name = models.CharField(max_length=25)
    address = models.CharField(max_length=50)
    phoneNum = models.CharField(max_length=10)
    deliveries = models.ForeignKey(
        Deliveries, on_delete=models.CASCADE, blank=True, null=True, related_name="customers")

    def __str__(self):
        return self.name
