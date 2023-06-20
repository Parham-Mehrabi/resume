from rest_framework.generics import RetrieveAPIView
from .models import Resume
from .serializers import ResumeSerializer


class GetResume(RetrieveAPIView):
    serializer_class = ResumeSerializer
    queryset = Resume.objects.last()

    def get_object(self):
        return self.queryset
