from django.contrib import admin
from .models import Resume, Skill


class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'id', 'tier', 'tag']


admin.site.register(Resume)
admin.site.register(Skill, SkillAdmin)
