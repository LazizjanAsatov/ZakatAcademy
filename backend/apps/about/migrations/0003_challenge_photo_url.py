# Generated manually for adding photo_url field to Challenge model

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0002_challenge'),
    ]

    operations = [
        migrations.AddField(
            model_name='challenge',
            name='photo_url',
            field=models.URLField(blank=True, help_text='URL to challenge photo/image', null=True),
        ),
        migrations.AlterField(
            model_name='challenge',
            name='icon_type',
            field=models.CharField(blank=True, choices=[('no_access', 'No Access (X icon)'), ('confusion', 'Confusion (Question mark)'), ('dependence', 'Dependence (People icon)')], help_text='Icon style to display (optional if photo_url is provided)', max_length=50),
        ),
    ]
