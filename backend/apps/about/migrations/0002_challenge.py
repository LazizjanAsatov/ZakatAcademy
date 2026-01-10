# Generated manually for adding Challenge model

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Challenge',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text="Challenge title (e.g., 'No access to Islamic finance')", max_length=200)),
                ('description', models.TextField(blank=True, help_text='Optional description')),
                ('icon_type', models.CharField(choices=[('no_access', 'No Access (X icon)'), ('confusion', 'Confusion (Question mark)'), ('dependence', 'Dependence (People icon)')], default='no_access', help_text='Icon style to display', max_length=50)),
                ('order', models.PositiveIntegerField(default=0, help_text='Order in which challenge appears (lower numbers first)')),
                ('is_published', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Challenge',
                'verbose_name_plural': 'Challenges',
                'db_table': 'challenges',
                'ordering': ['order', 'created_at'],
            },
        ),
    ]
