from rest_framework import serializers
from .models import Project, ProjectImage


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

    def to_representation(self, instance):
        data = super().to_representation(instance)
        if data['status'] == 0:
            data['status'] = 'developing'
        elif data['status'] == 1:
            data['status'] = 'improving'
        else:
            data['status'] = 'finished'
        return data


class ProjectRetrieveSerializer(ListProjectSerializer):
    """
        this serializer used to Retrieve a single Project
    """
    pass


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'picture', 'project']
