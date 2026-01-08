# Generated migration for SocialMediaLink model
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0003_faq'),
    ]

    operations = [
        migrations.CreateModel(
            name='SocialMediaLink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('platform', models.CharField(choices=[('facebook', 'Facebook'), ('twitter', 'Twitter'), ('instagram', 'Instagram'), ('youtube', 'YouTube'), ('linkedin', 'LinkedIn'), ('tiktok', 'TikTok'), ('whatsapp', 'WhatsApp'), ('telegram', 'Telegram')], max_length=50, unique=True)),
                ('url', models.URLField()),
                ('icon_class', models.CharField(blank=True, help_text='Optional: CSS class for custom icon', max_length=100)),
                ('order', models.PositiveIntegerField(default=0, help_text='Order in which link appears (lower numbers first)')),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['order', 'platform'],
                'db_table': 'social_media_links',
                'verbose_name': 'Social Media Link',
                'verbose_name_plural': 'Social Media Links',
            },
        ),
    ]
