from django.db import models
from datetime import date


class State(models.Model):
    state_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name


class Site(models.Model):
    site_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    numDeliveries = models.IntegerField()
    totPurAmnt = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    stateId = models.ForeignKey(State, on_delete=models.CASCADE,
                                blank=True, null=True, related_name="sites")

    def __str__(self):
        return self.name


class Store(models.Model):
    store_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)
    location = models.CharField(max_length=50)
    storeLong = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, null=True)
    storeLat = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, null=True)
    numDeliveries = models.IntegerField()
    stateId = models.ForeignKey(State, on_delete=models.CASCADE,
                                blank=True, null=True, related_name="stores")

    def __str__(self):
        return self.name


class Delivery(models.Model):
    class Meta:
        verbose_name_plural = "deliveries"

    date = models.DateField(auto_now_add=True)
    delAddress = models.CharField(max_length=50)
    delLong = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, null=True)
    delLat = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, null=True)
    purAmount = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    delivery_id = models.AutoField(primary_key=True)

    storeId = models.ForeignKey(
        Store, on_delete=models.CASCADE, blank=True, null=True, related_name="deliveries")

    def __date__(self):
        return self.date


class Customer(models.Model):
    name = models.CharField(max_length=25)
    address = models.CharField(max_length=50)
    custLong = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, null=True)
    custLat = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, null=True)
    phoneNum = models.CharField(max_length=10)
    deliveryId = models.ForeignKey(
        Delivery, on_delete=models.CASCADE, blank=True, null=True, related_name="customers")

    def __str__(self):
        return self.name
