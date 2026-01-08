from django.db import models
from django.contrib.auth import get_user_model
from django.utils.text import slugify

User = get_user_model()


class Course(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    short_description = models.TextField(max_length=300)
    description = models.TextField()
    thumbnail_url = models.URLField(blank=True, null=True)
    is_published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        db_table = 'courses'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Module(models.Model):
    course = models.ForeignKey(Course, related_name='modules', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'created_at']
        db_table = 'modules'

    def __str__(self):
        return f"{self.course.title} - {self.title}"


class Lesson(models.Model):
    VIDEO_PROVIDER_CHOICES = [
        ('youtube', 'YouTube'),
    ]

    module = models.ForeignKey(Module, related_name='lessons', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    order = models.PositiveIntegerField(default=0)
    content = models.TextField(blank=True)
    video_provider = models.CharField(max_length=50, choices=VIDEO_PROVIDER_CHOICES, default='youtube')
    youtube_video_id = models.CharField(max_length=100, blank=True)
    duration_minutes = models.PositiveIntegerField(null=True, blank=True)
    is_preview = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'created_at']
        db_table = 'lessons'

    def __str__(self):
        return f"{self.module.title} - {self.title}"


class Enrollment(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('completed', 'Completed'),
        ('dropped', 'Dropped'),
    ]

    user = models.ForeignKey(User, related_name='enrollments', on_delete=models.CASCADE)
    course = models.ForeignKey(Course, related_name='enrollments', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ['user', 'course']
        ordering = ['-created_at']
        db_table = 'enrollments'

    def __str__(self):
        return f"{self.user.email} - {self.course.title}"


class LessonProgress(models.Model):
    user = models.ForeignKey(User, related_name='lesson_progress', on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, related_name='progress', on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    last_position_seconds = models.PositiveIntegerField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ['user', 'lesson']
        db_table = 'lesson_progress'

    def __str__(self):
        return f"{self.user.email} - {self.lesson.title} - {'Completed' if self.completed else 'In Progress'}"


class FAQ(models.Model):
    question = models.CharField(max_length=300)
    answer = models.TextField()
    order = models.PositiveIntegerField(default=0, help_text="Order in which FAQ appears (lower numbers first)")
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'created_at']
        db_table = 'faqs'
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQs'

    def __str__(self):
        return self.question


class SocialMediaLink(models.Model):
    PLATFORM_CHOICES = [
        ('facebook', 'Facebook'),
        ('twitter', 'Twitter'),
        ('instagram', 'Instagram'),
        ('youtube', 'YouTube'),
        ('linkedin', 'LinkedIn'),
        ('tiktok', 'TikTok'),
        ('whatsapp', 'WhatsApp'),
        ('telegram', 'Telegram'),
    ]

    platform = models.CharField(max_length=50, choices=PLATFORM_CHOICES, unique=True)
    url = models.URLField()
    icon_class = models.CharField(max_length=100, blank=True, help_text="Optional: CSS class for custom icon")
    order = models.PositiveIntegerField(default=0, help_text="Order in which link appears (lower numbers first)")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'platform']
        db_table = 'social_media_links'
        verbose_name = 'Social Media Link'
        verbose_name_plural = 'Social Media Links'

    def __str__(self):
        return f"{self.get_platform_display()}"


class Statistics(models.Model):
    """Statistics model for homepage display. Only one instance should exist."""
    active_learners = models.PositiveIntegerField(default=0, help_text="Number of active learners to display")
    courses = models.PositiveIntegerField(default=0, help_text="Number of courses to display")
    video_lessons = models.PositiveIntegerField(default=0, help_text="Number of video lessons to display")
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'statistics'
        verbose_name = 'Statistics'
        verbose_name_plural = 'Statistics'

    def __str__(self):
        return f"Statistics (Updated: {self.updated_at.strftime('%Y-%m-%d %H:%M')})"

    def save(self, *args, **kwargs):
        """Ensure only one statistics instance exists."""
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        """Get or create the singleton statistics instance."""
        obj, created = cls.objects.get_or_create(pk=1, defaults={
            'active_learners': 100,
            'courses': 10,
            'video_lessons': 50,
        })
        return obj
