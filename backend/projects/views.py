from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.shortcuts import get_object_or_404
from .models import Project, ProjectImage
from .serializers import ListProjectSerializer, ProjectRetrieveSerializer, ProjectImageSerializer


class GetProjectsApi(ListAPIView):
    """
        list all projects
    """
    queryset = Project.objects.all()
    serializer_class = ListProjectSerializer


class ProjectRetrieve(RetrieveAPIView):
    """
        return a single project details (Retrieve project)
    """
    lookup_field = 'id'
    serializer_class = ProjectRetrieveSerializer

    def get_object(self):
        obj = get_object_or_404(Project, id=int(self.kwargs['id']))
        return obj


class ProjectImagesAPI(ListAPIView):
    """
        list a project images
    """

    serializer_class = ProjectImageSerializer

    def get_queryset(self):
        images = ProjectImage.objects.filter(project_id=self.kwargs['id'])
        return images


class ListProjectsImages(ListAPIView):
    """
        this endpoint return all projects photos
    """
    queryset = ProjectImage.objects.all()
    serializer_class = ProjectImageSerializer
