# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-07-16 13:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0002_auto_20160716_1603'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slidesmainpage',
            name='text',
            field=models.TextField(max_length=100, verbose_name='Текст'),
        ),
        migrations.AlterField(
            model_name='slidesmainpage',
            name='text_en',
            field=models.TextField(max_length=100, null=True, verbose_name='Текст'),
        ),
        migrations.AlterField(
            model_name='slidesmainpage',
            name='text_ru',
            field=models.TextField(max_length=100, null=True, verbose_name='Текст'),
        ),
    ]
