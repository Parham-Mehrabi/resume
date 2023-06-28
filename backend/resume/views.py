from rest_framework.generics import RetrieveAPIView, ListAPIView
from django.shortcuts import get_object_or_404
from .models import Resume, Certificate, Skill
from .serializers import ResumeSerializer, CertificatesListSerializer, SkillSerializer


class GetResume(RetrieveAPIView):
    """
        retrieve my latest resume
    """
    serializer_class = ResumeSerializer
    queryset = Resume.objects.last()

    def get_object(self):
        return self.queryset


class CertificatesList(ListAPIView):
    """
        list my certificates
    """
    serializer_class = CertificatesListSerializer
    queryset = Certificate.objects.all()


class RetrieveSkillApi(RetrieveAPIView):
    serializer_class = SkillSerializer
    lookup_field = 'name'

    def get_object(self):
        data = get_object_or_404(Skill, name=self.kwargs['name'])
        return data
