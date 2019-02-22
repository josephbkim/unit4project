from rest_framework import serializers
from .models import *


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = ('state_id', 'name')


class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = ('site_id', 'name', 'numDeliveries', 'totPurAmnt')


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ('store_id', 'name', 'location',
                  'storeLong', 'storeLat', 'numDeliveries',)


class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivery
        fields = ('date', 'delAddress', 'delLong',
                  'delLat', 'purAmount', 'delivery_id')


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('name', 'address', 'custLong', 'custLat', 'phoneNum')
