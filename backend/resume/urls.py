from django.urls import path
from .views import GetResume, CertificatesList, RetrieveSkillApi


urlpatterns = [
    path('', GetResume.as_view(), name='resume'),
    path('certificates/', CertificatesList.as_view(), name='certificates'),
    path('skill/<str:name>', RetrieveSkillApi.as_view(), name='retrieve-skill'),
]
# TODO: add and use slug field for instead of skill name

