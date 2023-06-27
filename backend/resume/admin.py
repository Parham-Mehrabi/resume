from django.contrib import admin
from .models import Resume, Skill, Certificate


class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'id', 'tier', 'tag']


class CertificateAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'score', 'certificate_source']
    list_filter = ['score', 'course_main_master', 'certificate_source']


admin.site.register(Resume)
admin.site.register(Skill, SkillAdmin)
admin.site.register(Certificate, CertificateAdmin)
