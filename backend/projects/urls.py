from django.urls import path
from .views import GetProjectsApi, ProjectRetrieve, ProjectImagesAPI, ListProjectsImages


urlpatterns = [
    path('', GetProjectsApi.as_view(), name='get_project'),
    path('<int:id>', ProjectRetrieve.as_view(), name='get_project_details'),
    path('image/', ListProjectsImages.as_view(), name='get_project_images'),
    path('image/<int:id>', ProjectImagesAPI.as_view(), name='get_project_images'),
]
