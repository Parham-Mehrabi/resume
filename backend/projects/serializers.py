from rest_framework import serializers
from .models import Project, Tag


class ListProjectSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(
        many=True,
        slug_field='name',
        read_only=True
    )

    class Meta:
        model = Project
        fields = '__all__'
