# Generated by Django 5.0.7 on 2024-07-24 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_experience_options_experience_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='job_title',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
