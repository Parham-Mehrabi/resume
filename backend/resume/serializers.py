from rest_framework import serializers
from .models import Resume, Skill


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        skills = Skill.objects.all()
        for i in Skill.TAG_CHOICES:
            skill_lists = []
            new_skills = skills.filter(tag=i[0])
            for j in new_skills:
                skill_lists.append(j.name)
            data[i[1]] = skill_lists
        return data
