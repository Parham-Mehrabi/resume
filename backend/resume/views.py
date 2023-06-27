from rest_framework.generics import RetrieveAPIView, ListAPIView
from .models import Resume, Certificate
from .serializers import ResumeSerializer, CertificatesListSerializer


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

