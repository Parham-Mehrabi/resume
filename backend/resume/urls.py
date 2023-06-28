from django.urls import path
from .views import GetResume, CertificatesList, RetrieveSkillApi


urlpatterns = [
    path('', GetResume.as_view(), name='resume'),
    path('certificates/', CertificatesList.as_view(), name='certificates'),
    path('skill/<int:id>', RetrieveSkillApi.as_view(), name='retrieve-skill')
]
# TODO: add a new end point to retrieve skills
