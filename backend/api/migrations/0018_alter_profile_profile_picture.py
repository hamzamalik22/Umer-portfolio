# Generated by Django 5.0.7 on 2024-07-24 15:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_profile_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_picture',
            field=models.ImageField(blank=True, default='by_default.png', null=True, upload_to=''),
        ),
    ]
