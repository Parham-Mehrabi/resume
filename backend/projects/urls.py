from django.urls import path
from .views import GetProjectsApi


urlpatterns = [
    path('', GetProjectsApi.as_view(), name='get_project'),
]
