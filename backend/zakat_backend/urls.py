"""
URL configuration for zakat_backend project.
"""
from django.contrib import admin
from django.urls import path, include

# Customize admin site
admin.site.site_header = 'Zakat Academy Administration'
admin.site.site_title = 'Zakat Academy Admin'
admin.site.index_title = 'Welcome to Zakat Academy Administration'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('apps.users.urls')),
    path('api/', include('apps.courses.urls')),
]

