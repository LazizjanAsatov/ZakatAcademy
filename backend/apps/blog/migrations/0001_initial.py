# Generated migration for blog app
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('slug', models.SlugField(blank=True, unique=True)),
                ('excerpt', models.TextField(help_text='Short description for preview', max_length=300)),
                ('content', models.TextField()),
                ('featured_image_url', models.URLField(blank=True, null=True)),
                ('author_name', models.CharField(default='Zakat Academy', max_length=100)),
                ('is_published', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['-created_at'],
                'db_table': 'blog_posts',
            },
        ),
    ]
