from django.db import models
from django.core.exceptions import ValidationError
from django.conf import settings
import datetime


class TRWCustodian(models.Model):
    """
    Tracks who is financially responsible (billed) for a stock item over time.
    Only one custodian can be active (end_date=None) per stock item at any time.
    When transferring custody, set end_date on the current record and create a new one.
    The new start_date must equal the old end_date (same-day handover — no gaps, no overlaps).
    """
    stock_item = models.ForeignKey(
        'stock.StockItem',
        on_delete=models.CASCADE,
        related_name='trw_custodians',
        verbose_name='Stock Item',
    )
    company = models.ForeignKey(
        'company.Company',
        on_delete=models.PROTECT,
        related_name='trw_custodian_entries',
        verbose_name='Custodian Company',
        limit_choices_to={'is_customer': True},
    )
    start_date = models.DateField(
        verbose_name='Start Date',
        help_text='Date from which this company became the custodian',
    )
    end_date = models.DateField(
        null=True,
        blank=True,
        verbose_name='End Date',
        help_text='Date custody ended. Leave blank if currently active.',
    )
    notes = models.TextField(blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='+',
    )

    class Meta:
        app_label = 'trw_storage'
        ordering = ['stock_item', '-start_date']
        verbose_name = 'TRW Custodian'
        verbose_name_plural = 'TRW Custodians'

    def __str__(self):
        end = self.end_date.isoformat() if self.end_date else 'present'
        return f'{self.company.name} custodian of #{self.stock_item_id} ({self.start_date} → {end})'

    def clean(self):
        super().clean()
        if self.start_date and self.end_date:
            if self.start_date > self.end_date:
                raise ValidationError({'end_date': 'End date cannot be before start date.'})

        # Only one active custodian per stock item
        if self.end_date is None:
            qs = TRWCustodian.objects.filter(
                stock_item=self.stock_item,
                end_date__isnull=True,
            )
            if self.pk:
                qs = qs.exclude(pk=self.pk)
            if qs.exists():
                raise ValidationError(
                    'This stock item already has an active custodian. '
                    'Close the existing custodian record before adding a new one.'
                )

        # Check for date overlaps with other custodian periods for this stock item
        if self.stock_item_id and self.start_date:
            self._check_overlap()

    def _check_overlap(self):
        """Ensure this custodian period does not overlap with any existing one for the same stock item."""
        qs = TRWCustodian.objects.filter(stock_item=self.stock_item)
        if self.pk:
            qs = qs.exclude(pk=self.pk)

        for other in qs:
            other_end = other.end_date or datetime.date.max
            self_end = self.end_date or datetime.date.max

            # Overlap condition: two periods overlap if start_a < end_b AND start_b < end_a
            # We allow same-day boundary (start == end is fine, means zero-length)
            if self.start_date < other_end and other.start_date < self_end:
                # Allow touching boundaries (same-day handover): start of new == end of old
                if self.start_date == other.end_date or other.start_date == self.end_date:
                    continue
                raise ValidationError(
                    f'This custodian period overlaps with an existing record '
                    f'({other.company.name}, {other.start_date} → {other.end_date or "present"}).'
                )

    @classmethod
    def active_on_date(cls, stock_item_id, date):
        """Return the custodian record active on the given date, or None."""
        return cls.objects.filter(
            stock_item_id=stock_item_id,
            start_date__lte=date,
        ).filter(
            models.Q(end_date__isnull=True) | models.Q(end_date__gt=date)
        ).select_related('company').first()


class TRWInterest(models.Model):
    """
    Tracks companies that have an interest in a stock item (e.g. agreed to purchase,
    have been allocated a portion, or need visibility of the stock).
    Multiple interests can be active simultaneously. An interest does NOT imply billing.
    """
    stock_item = models.ForeignKey(
        'stock.StockItem',
        on_delete=models.CASCADE,
        related_name='trw_interests',
        verbose_name='Stock Item',
    )
    company = models.ForeignKey(
        'company.Company',
        on_delete=models.PROTECT,
        related_name='trw_interest_entries',
        verbose_name='Interested Company',
        limit_choices_to={'is_customer': True},
    )
    start_date = models.DateField(
        verbose_name='Start Date',
        help_text='Date from which this company has had an interest in this stock',
    )
    end_date = models.DateField(
        null=True,
        blank=True,
        verbose_name='End Date',
        help_text='Date interest ended. Leave blank if currently active.',
    )
    notes = models.TextField(blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='+',
    )

    class Meta:
        app_label = 'trw_storage'
        ordering = ['stock_item', '-start_date']
        unique_together = [('stock_item', 'company', 'start_date')]
        verbose_name = 'TRW Interest'
        verbose_name_plural = 'TRW Interests'

    def __str__(self):
        end = self.end_date.isoformat() if self.end_date else 'present'
        return f'{self.company.name} interest in #{self.stock_item_id} ({self.start_date} → {end})'

    def clean(self):
        super().clean()
        if self.start_date and self.end_date:
            if self.start_date > self.end_date:
                raise ValidationError({'end_date': 'End date cannot be before start date.'})
