import datetime
from django.db import transaction
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q

from .models import TRWCustodian, TRWInterest
from .serializers import (
    TRWCustodianSerializer,
    TRWInterestSerializer,
    TransferCustodySerializer,
)


class TRWCustodianViewSet(viewsets.ModelViewSet):
    serializer_class = TRWCustodianSerializer
    http_method_names = ['get', 'post', 'patch', 'delete', 'head', 'options']

    def get_queryset(self):
        qs = TRWCustodian.objects.select_related('company', 'stock_item').order_by(
            'stock_item', '-start_date'
        )

        # Filter by stock item
        stock_item = self.request.query_params.get('stock_item')
        if stock_item:
            qs = qs.filter(stock_item_id=stock_item)

        # Filter by company
        company = self.request.query_params.get('company')
        if company:
            qs = qs.filter(company_id=company)

        # Filter to currently active records only
        active = self.request.query_params.get('active')
        if active and active.lower() in ('true', '1', 'yes'):
            qs = qs.filter(end_date__isnull=True)

        # Filter to records active on a specific date
        on_date = self.request.query_params.get('on_date')
        if on_date:
            try:
                d = datetime.date.fromisoformat(on_date)
                qs = qs.filter(start_date__lte=d).filter(
                    Q(end_date__isnull=True) | Q(end_date__gt=d)
                )
            except ValueError:
                pass

        return qs

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    @action(detail=False, methods=['post'], url_path='transfer')
    @transaction.atomic
    def transfer(self, request):
        """
        Transfer custody from the current active custodian to a new company.
        Atomically closes the existing record and opens a new one.
        """
        ser = TransferCustodySerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        data = ser.validated_data

        stock_item_id = data['stock_item']
        new_company_id = data['new_company']
        transfer_date = data.get('transfer_date') or datetime.date.today()
        notes = data.get('notes', '')

        # Close current active custodian if one exists
        current = TRWCustodian.objects.filter(
            stock_item_id=stock_item_id,
            end_date__isnull=True,
        ).first()

        if current:
            if transfer_date < current.start_date:
                return Response(
                    {'detail': 'Transfer date cannot be before the current custodian\'s start date.'},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            current.end_date = transfer_date
            current.full_clean()
            current.save()

        # Create new custodian record
        new_custodian = TRWCustodian(
            stock_item_id=stock_item_id,
            company_id=new_company_id,
            start_date=transfer_date,
            notes=notes,
            created_by=request.user,
        )
        new_custodian.full_clean()
        new_custodian.save()

        return Response(
            TRWCustodianSerializer(new_custodian).data,
            status=status.HTTP_201_CREATED,
        )


class TRWInterestViewSet(viewsets.ModelViewSet):
    serializer_class = TRWInterestSerializer
    http_method_names = ['get', 'post', 'patch', 'delete', 'head', 'options']

    def get_queryset(self):
        qs = TRWInterest.objects.select_related('company', 'stock_item').order_by(
            'stock_item', '-start_date'
        )

        stock_item = self.request.query_params.get('stock_item')
        if stock_item:
            qs = qs.filter(stock_item_id=stock_item)

        company = self.request.query_params.get('company')
        if company:
            qs = qs.filter(company_id=company)

        active = self.request.query_params.get('active')
        if active and active.lower() in ('true', '1', 'yes'):
            qs = qs.filter(end_date__isnull=True)

        on_date = self.request.query_params.get('on_date')
        if on_date:
            try:
                d = datetime.date.fromisoformat(on_date)
                qs = qs.filter(start_date__lte=d).filter(
                    Q(end_date__isnull=True) | Q(end_date__gt=d)
                )
            except ValueError:
                pass

        return qs

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    @action(detail=True, methods=['post'], url_path='close')
    def close(self, request, pk=None):
        """Close an active interest by setting its end_date."""
        interest = self.get_object()
        end_date_str = request.data.get('end_date')
        try:
            end_date = datetime.date.fromisoformat(end_date_str) if end_date_str else datetime.date.today()
        except ValueError:
            return Response({'detail': 'Invalid end_date format. Use YYYY-MM-DD.'}, status=status.HTTP_400_BAD_REQUEST)

        if end_date < interest.start_date:
            return Response(
                {'detail': 'End date cannot be before start date.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        interest.end_date = end_date
        interest.full_clean()
        interest.save()
        return Response(TRWInterestSerializer(interest).data)
