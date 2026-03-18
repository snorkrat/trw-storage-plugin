from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('company', '0001_initial'),
        ('stock', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='TRWCustodian',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField(help_text='Date from which this company became the custodian', verbose_name='Start Date')),
                ('end_date', models.DateField(blank=True, help_text='Date custody ended. Leave blank if currently active.', null=True, verbose_name='End Date')),
                ('notes', models.TextField(blank=True, default='')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('company', models.ForeignKey(
                    limit_choices_to={'is_customer': True},
                    on_delete=django.db.models.deletion.PROTECT,
                    related_name='trw_custodian_entries',
                    to='company.company',
                    verbose_name='Custodian Company',
                )),
                ('created_by', models.ForeignKey(
                    blank=True,
                    null=True,
                    on_delete=django.db.models.deletion.SET_NULL,
                    related_name='+',
                    to=settings.AUTH_USER_MODEL,
                )),
                ('stock_item', models.ForeignKey(
                    on_delete=django.db.models.deletion.CASCADE,
                    related_name='trw_custodians',
                    to='stock.stockitem',
                    verbose_name='Stock Item',
                )),
            ],
            options={
                'verbose_name': 'TRW Custodian',
                'verbose_name_plural': 'TRW Custodians',
                'ordering': ['stock_item', '-start_date'],
            },
        ),
        migrations.CreateModel(
            name='TRWInterest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField(help_text='Date from which this company has had an interest in this stock', verbose_name='Start Date')),
                ('end_date', models.DateField(blank=True, help_text='Date interest ended. Leave blank if currently active.', null=True, verbose_name='End Date')),
                ('notes', models.TextField(blank=True, default='')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('company', models.ForeignKey(
                    limit_choices_to={'is_customer': True},
                    on_delete=django.db.models.deletion.PROTECT,
                    related_name='trw_interest_entries',
                    to='company.company',
                    verbose_name='Interested Company',
                )),
                ('created_by', models.ForeignKey(
                    blank=True,
                    null=True,
                    on_delete=django.db.models.deletion.SET_NULL,
                    related_name='+',
                    to=settings.AUTH_USER_MODEL,
                )),
                ('stock_item', models.ForeignKey(
                    on_delete=django.db.models.deletion.CASCADE,
                    related_name='trw_interests',
                    to='stock.stockitem',
                    verbose_name='Stock Item',
                )),
            ],
            options={
                'verbose_name': 'TRW Interest',
                'verbose_name_plural': 'TRW Interests',
                'ordering': ['stock_item', '-start_date'],
            },
        ),
        migrations.AlterUniqueTogether(
            name='trwinterest',
            unique_together={('stock_item', 'company', 'start_date')},
        ),
    ]
