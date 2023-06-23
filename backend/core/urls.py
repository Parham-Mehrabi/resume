from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('back/resume/', include('resume.urls'), name='resume_api'),
    path('back/project/', include('projects.urls'), name='project_api')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
