# Generated by Django 4.2.1 on 2023-05-30 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_interaction_respons'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interaction',
            name='id_interaction',
            field=models.AutoField(primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='id_post',
            field=models.AutoField(primary_key=True, serialize=False, unique=True),
        ),
    ]