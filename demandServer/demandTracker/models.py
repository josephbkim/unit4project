from django.db import models
from datetime import date

# Create your models here.


class State(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name


class Site(models.Model):
    name = models.CharField(max_length=50)
    numDeliveries = models.IntegerField
    totPurAmnt = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    state = models.ForeignKey(State, on_delete=models.CASCADE,
                              blank=True, null=True, related_name="sites")

    def __str__(self):
        return self.name


class Store(models.Model):
    name = models.CharField(max_length=25)
    storeLocation = models.CharField(max_length=50)
    storeLong = models.DecimalField(max_digits=9, decimal_places=6)
    storeLat = models.DecimalField(max_digits=9, decimal_places=6)
    numDeliveries = models.IntegerField
    state = models.ForeignKey(State, on_delete=models.CASCADE,
                              blank=True, null=True, related_name="stores")

    def __str__(self):
        return self.name


class Delivery(models.Model):
    class Meta:
        verbose_name_plural = "deliveries"

    date = models.DateField(("Date"), default=date.today)
    delAddress = models.CharField(max_length=50)
    delLong = models.DecimalField(max_digits=9, decimal_places=6)
    delLat = models.DecimalField(max_digits=9, decimal_places=6)
    purAmount = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    stores = models.ForeignKey(
        Store, on_delete=models.CASCADE, blank=True, null=True, related_name="deliveries")

    def __str__(self):
        return self.date


class Customer(models.Model):
    name = models.CharField(max_length=25)
    address = models.CharField(max_length=50)
    phoneNum = models.CharField(max_length=10)
    deliveries = models.ForeignKey(
        Delivery, on_delete=models.CASCADE, blank=True, null=True, related_name="customers")

    def __str__(self):
        return self.name
