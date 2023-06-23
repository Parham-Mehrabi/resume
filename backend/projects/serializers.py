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

    def to_representation(self, instance):
        data = super().to_representation(instance)
        if data['status'] == 0:
            data['status'] = 'developing'
        elif data['status'] == 1:
            data['status'] = 'improving'
        else:
            data['status'] = 'finished'
        return data
