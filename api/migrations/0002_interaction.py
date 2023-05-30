# Generated by Django 4.2.1 on 2023-05-30 16:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Interaction',
            fields=[
                ('id_interaction', models.AutoField(primary_key=True, serialize=False)),
                ('respons', models.CharField()),
                ('sender', models.CharField()),
                ('nitiper', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
