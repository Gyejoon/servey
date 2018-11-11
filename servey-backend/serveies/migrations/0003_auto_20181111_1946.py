# Generated by Django 2.1 on 2018-11-11 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('serveies', '0002_auto_20181111_0119'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='admin',
            name='salt',
        ),
        migrations.AlterField(
            model_name='admin',
            name='modified',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='servey',
            name='modified',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='serveyquestion',
            name='modified',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='serveyquestion',
            name='type',
            field=models.CharField(choices=[('YN', 'YesorNo'), ('SI', 'Single'), ('MU', 'Mutiple')], max_length=2),
        ),
    ]
