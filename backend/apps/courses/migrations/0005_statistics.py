# Generated migration for Statistics model
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0004_socialmedialink'),
    ]

    operations = [
        migrations.CreateModel(
            name='Statistics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active_learners', models.PositiveIntegerField(default=0, help_text='Number of active learners to display')),
                ('courses', models.PositiveIntegerField(default=0, help_text='Number of courses to display')),
                ('video_lessons', models.PositiveIntegerField(default=0, help_text='Number of video lessons to display')),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'statistics',
                'verbose_name': 'Statistics',
                'verbose_name_plural': 'Statistics',
            },
        ),
    ]
