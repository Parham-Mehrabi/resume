from django.urls import path
from .views import GetResume


urlpatterns = [
    path('', GetResume.as_view(), name='resume'),
]
