from django.db import models


class TeamMember(models.Model):
    """Model for team members (founders and team mates)."""
    ROLE_CHOICES = [
        ('founder', 'Founder'),
        ('team', 'Team Member'),
    ]

    name = models.CharField(max_length=200)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES)
    position = models.CharField(max_length=200, help_text="Job title or position")
    bio = models.TextField(help_text="Short biography")
    photo_url = models.URLField(blank=True, null=True, help_text="URL to team member photo")
    email = models.EmailField(blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0, help_text="Order in which member appears (lower numbers first)")
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['role', 'order', 'name']
        db_table = 'team_members'
        verbose_name = 'Team Member'
        verbose_name_plural = 'Team Members'

    def __str__(self):
        return f"{self.name} - {self.get_role_display()}"


class Event(models.Model):
    """Model for events."""
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=300, help_text="Event location/venue")
    event_date = models.DateTimeField(help_text="Date and time of the event")
    image_url = models.URLField(blank=True, null=True, help_text="URL to event image")
    registration_url = models.URLField(blank=True, null=True, help_text="URL for event registration")
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-event_date', '-created_at']
        db_table = 'events'
        verbose_name = 'Event'
        verbose_name_plural = 'Events'

    def __str__(self):
        return self.title


class Challenge(models.Model):
    """Model for challenges/problems that women face (shown on home page)."""
    ICON_TYPE_CHOICES = [
        ('no_access', 'No Access (X icon)'),
        ('confusion', 'Confusion (Question mark)'),
        ('dependence', 'Dependence (People icon)'),
    ]

    title = models.CharField(max_length=200, help_text="Challenge title (e.g., 'No access to Islamic finance')")
    description = models.TextField(blank=True, help_text="Optional description")
    photo_url = models.URLField(blank=True, null=True, help_text="URL to challenge photo/image")
    icon_type = models.CharField(max_length=50, choices=ICON_TYPE_CHOICES, blank=True, help_text="Icon style to display (optional if photo_url is provided)")
    order = models.PositiveIntegerField(default=0, help_text="Order in which challenge appears (lower numbers first)")
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'created_at']
        db_table = 'challenges'
        verbose_name = 'Challenge'
        verbose_name_plural = 'Challenges'

    def __str__(self):
        return self.title
