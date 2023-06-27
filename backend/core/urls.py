from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from .spa import Index, index

urlpatterns = [
                  path('admin/', admin.site.urls),

                  path('back/resume/', include('resume.urls'), name='resume_api'),
                  path('back/project/', include('projects.urls'), name='project_api'),
                  # re_path(r'^(?!(?:back|admin)(?:|$)).*', Index.as_view(), name='index'),
                  re_path(r'^(?!(?:back|static|media|admin)(?:|$)).*', index, name='index'),
                  # re_path(r'^(?!(?:back|static|media|admin)(?:|$)).*', Index.as_view(), name='index'),

              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL,
                                                                                         document_root=settings.STATIC_ROOT)
