# Generated by Django 5.0.7 on 2024-07-24 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_testimonial_gender'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='education',
            options={'ordering': ['order', 'start_year']},
        ),
        migrations.AddField(
            model_name='education',
            name='order',
            field=models.PositiveIntegerField(default=0, null=True),
        ),
    ]
