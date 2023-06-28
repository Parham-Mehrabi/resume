from rest_framework import serializers
from .models import Skill, Resume, Certificate


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
                skill_lists.append([j.name, j.tier, j.id])
            data[i[1]] = skill_lists
        return data


class CertificatesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
