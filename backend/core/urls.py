from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('back/resume', include('resume.urls'), name='resume_api')
]