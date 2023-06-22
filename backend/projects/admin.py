from django.contrib import admin
from .models import Tags, Project


class ProjectAdmin(admin.ModelAdmin):
    list_display = ['status', 'name']
    list_filter = ['tags', 'status']
    search_fields = ['name', 'tags', 'description']


admin.site.register(Project, ProjectAdmin)
admin.site.register(Tags)
