from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.shortcuts import get_object_or_404
from .models import Project
from .serializers import ListProjectSerializer, ProjectRetrieveSerializer


class GetProjectsApi(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ListProjectSerializer


class ProjectRetrieve(RetrieveAPIView):
    lookup_field = 'id'
    serializer_class = ProjectRetrieveSerializer

    def get_object(self):
        obj = get_object_or_404(Project, id=int(self.kwargs['id']))
        return obj
