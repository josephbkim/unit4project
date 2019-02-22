from rest_framework import serializers
from .models import *


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('name', 'address', 'custLong', 'custLat', 'phoneNum')


class DeliverySerializer(serializers.ModelSerializer):
    customer = CustomerSerializer(many=True, read_only=True)

    class Meta:
        model = Delivery
        fields = ('date', 'delAddress', 'delLong',
                  'delLat', 'purAmount', 'delivery_id', 'customer')


class StoreSerializer(serializers.ModelSerializer):
    delivery = DeliverySerializer(many=True, read_only=True)
    customer = CustomerSerializer(many=True, read_only=True)

    class Meta:
        model = Store
        fields = ('store_id', 'name', 'location',
                  'storeLong', 'storeLat', 'numDeliveries', 'delivery', 'customer')


class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = ('site_id', 'name', 'numDeliveries', 'totPurAmnt')


class StateSerializer(serializers.ModelSerializer):
    site = SiteSerializer(many=True, read_only=True)
    store = StoreSerializer(many=True, read_only=True)

    class Meta:
        model = State
        fields = ('state_id', 'name', 'site', 'store')
