from rest_framework import serializers
from .models import Project, Tag


class ListProjectSerializer(serializers.ModelSerializer):
    """
        this serializer is for listing projects and converting tag IDs to tag names
    """
    tags = serializers.SlugRelatedField(
        many=True,
        slug_field='name',
        read_only=True
    )

    class Meta:
        model = Project
        fields = '__all__'


class ProjectRetrieveSerializer(ListProjectSerializer):
    """
        this serializer used to Retrieve a single Project
    """
    pass
