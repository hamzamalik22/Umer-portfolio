# Generated by Django 5.0.7 on 2024-07-25 13:13

import api.firebase_storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_project_featured_image_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='featured_image',
            field=models.ImageField(blank=True, default='default.jpg', null=True, storage=api.firebase_storage.FirebaseStorage(), upload_to=''),
        ),
    ]
