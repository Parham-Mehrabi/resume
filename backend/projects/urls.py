from django.urls import path
from .views import GetProjectsApi, ProjectRetrieve


urlpatterns = [
    path('', GetProjectsApi.as_view(), name='get_project'),
    path('<int:id>', ProjectRetrieve.as_view(), name='get_project_details'),
]
