# Generated by Django 2.2 on 2020-09-17 14:09

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('weather_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='city',
            name='description',
            field=models.CharField(default=django.utils.timezone.now, max_length=25),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='city',
            name='icon',
            field=models.CharField(default=django.utils.timezone.now, max_length=25),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='city',
            name='temperature',
            field=models.CharField(default=django.utils.timezone.now, max_length=25),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='city',
            name='name',
            field=models.CharField(max_length=25, unique=True),
        ),
    ]