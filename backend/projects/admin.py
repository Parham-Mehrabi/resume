from django.contrib import admin
from .models import Tag, Project, ProjectImage


class ProjectAdmin(admin.ModelAdmin):
    list_display = ['id', 'status', 'name']
    list_filter = ['tags', 'status']
    search_fields = ['name', 'tags', 'description']


admin.site.register(Project, ProjectAdmin)
admin.site.register(Tag)
admin.site.register(ProjectImage)
