from django.db import models
from datetime import date

# Create your models here.


class State(models.Model):
    state_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name


class Site(models.Model):
<<<<<<< HEAD
    name = models.CharField(max_length=50)
    numDeliveries = models.IntegerField
=======
    site_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    numDeliveries = models.IntegerField()
>>>>>>> d6e27679c2c0d9a838f6c18ed7a1fbb17e498418
    totPurAmnt = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    stateId = models.ForeignKey(State, on_delete=models.CASCADE,
                                blank=True, null=True, related_name="sites")

    def __str__(self):
        return self.name


class Store(models.Model):
<<<<<<< HEAD
    name = models.CharField(max_length=25)
    storeLocation = models.CharField(max_length=50)
    storeLong = models.DecimalField(max_digits=9, decimal_places=6)
    storeLat = models.DecimalField(max_digits=9, decimal_places=6)
    numDeliveries = models.IntegerField
    state = models.ForeignKey(State, on_delete=models.CASCADE,
                              blank=True, null=True, related_name="stores")
=======
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
>>>>>>> d6e27679c2c0d9a838f6c18ed7a1fbb17e498418

    def __str__(self):
        return self.name


class Delivery(models.Model):
    class Meta:
        verbose_name_plural = "deliveries"

<<<<<<< HEAD
    date = models.DateField(("Date"), default=date.today)
    delAddress = models.CharField(max_length=50)
    delLong = models.DecimalField(max_digits=9, decimal_places=6)
    delLat = models.DecimalField(max_digits=9, decimal_places=6)
    purAmount = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    stores = models.ForeignKey(
        Store, on_delete=models.CASCADE, blank=True, null=True, related_name="deliveries")
=======
    date = models.DateField(auto_now_add=True)
    delAddress = models.CharField(max_length=50)
    delLong = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, null=True)
    delLat = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, null=True)
    purAmount = models.DecimalField(
        max_digits=50, decimal_places=2, default=0.00)
    delivery_id = models.AutoField(primary_key=True)
>>>>>>> d6e27679c2c0d9a838f6c18ed7a1fbb17e498418

    storeId = models.ForeignKey(
        Store, on_delete=models.CASCADE, blank=True, null=True, related_name="deliveries")

    def __date__(self):
        return self.date


class Customer(models.Model):
    name = models.CharField(max_length=25)
    address = models.CharField(max_length=50)
<<<<<<< HEAD
    phoneNum = models.CharField(max_length=10)
    deliveries = models.ForeignKey(
=======
    custLong = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, null=True)
    custLat = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, null=True)
    phoneNum = models.CharField(max_length=10)
    deliveryId = models.ForeignKey(
>>>>>>> d6e27679c2c0d9a838f6c18ed7a1fbb17e498418
        Delivery, on_delete=models.CASCADE, blank=True, null=True, related_name="customers")

    def __str__(self):
        return self.name
