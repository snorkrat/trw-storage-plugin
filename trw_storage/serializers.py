from rest_framework import serializers
from .models import TRWCustodian, TRWInterest


class CompanySerializer(serializers.Serializer):
    """Minimal company representation for nested use."""
    id = serializers.IntegerField()
    name = serializers.CharField()


class TRWCustodianSerializer(serializers.ModelSerializer):
    company_detail = CompanySerializer(source='company', read_only=True)

    class Meta:
        model = TRWCustodian
        fields = [
            'id',
            'stock_item',
            'company',
            'company_detail',
            'start_date',
            'end_date',
            'notes',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate(self, data):
        instance = TRWCustodian(**data)
        if self.instance:
            # For updates, carry over existing values for fields not being changed
            for field in ['stock_item', 'company', 'start_date', 'end_date', 'notes']:
                if field not in data:
                    setattr(instance, field, getattr(self.instance, field))
            instance.pk = self.instance.pk
        instance.clean()
        return data


class TRWInterestSerializer(serializers.ModelSerializer):
    company_detail = CompanySerializer(source='company', read_only=True)

    class Meta:
        model = TRWInterest
        fields = [
            'id',
            'stock_item',
            'company',
            'company_detail',
            'start_date',
            'end_date',
            'notes',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate(self, data):
        instance = TRWInterest(**data)
        if self.instance:
            for field in ['stock_item', 'company', 'start_date', 'end_date', 'notes']:
                if field not in data:
                    setattr(instance, field, getattr(self.instance, field))
            instance.pk = self.instance.pk
        instance.clean()
        return data


class TransferCustodySerializer(serializers.Serializer):
    """
    Used for the /transfer/ action.
    Closes the current active custodian record and opens a new one.
    """
    stock_item = serializers.IntegerField()
    new_company = serializers.IntegerField(help_text='InvenTree company ID of the incoming custodian')
    transfer_date = serializers.DateField(help_text='Date the transfer takes effect (defaults to today)')
    notes = serializers.CharField(required=False, allow_blank=True, default='')
