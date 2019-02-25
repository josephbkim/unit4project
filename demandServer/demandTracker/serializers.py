from rest_framework import serializers
from .models import *


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('name', 'address', 'custLong', 'custLat', 'phoneNum')


class DeliverySerializer(serializers.ModelSerializer):
    customers = CustomerSerializer(many=True, read_only=True)

    class Meta:
        model = Delivery
        fields = ('date', 'delAddress', 'delLong',
                  'delLat', 'purAmount', 'delivery_id', 'customers')


class StoreSerializer(serializers.ModelSerializer):
    deliveries = DeliverySerializer(many=True, read_only=True)
    customers = CustomerSerializer(many=True, read_only=True)

    class Meta:
        model = Store
        fields = ('store_id', 'name', 'location',
                  'storeLong', 'storeLat', 'numDeliveries', 'deliveries', 'customers')


class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = ('site_id', 'name', 'numDeliveries', 'totPurAmnt')


class StateSerializer(serializers.ModelSerializer):
    sites = SiteSerializer(many=True, read_only=True)
    stores = StoreSerializer(many=True, read_only=True)

    class Meta:
        model = State
        fields = ('state_id', 'name', 'sites', 'stores')
