from rest_framework.generics import ListAPIView
from .models import Project
from .serializers import ListProjectSerializer


class GetProjectsApi(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ListProjectSerializer
