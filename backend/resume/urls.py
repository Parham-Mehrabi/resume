from django.urls import path
from .views import GetResume, CertificatesList


urlpatterns = [
    path('', GetResume.as_view(), name='resume'),
    path('certificates/', CertificatesList.as_view(), name='certificates')
]
