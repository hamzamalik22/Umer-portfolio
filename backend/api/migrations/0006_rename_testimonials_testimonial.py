# Generated by Django 5.0.7 on 2024-07-23 15:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_exprience_rename_job_profile_job_title_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Testimonials',
            new_name='Testimonial',
        ),
    ]