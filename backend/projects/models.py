from django.db import models
from resume.models import Skill


class Project(models.Model):
    """
        projects model
    """

    STATUS_CHOICES = [
        (0, 'developing'),
        (1, 'improving'),
        (2, 'finished'),
    ]

    name = models.CharField(max_length=248)
    tags = models.ManyToManyField('Tag')
    technologies = models.ManyToManyField(Skill)
    github_link = models.CharField(max_length=120, blank=True, null=True)
    project_link = models.CharField(max_length=120, blank=True, null=True)

    description = models.TextField()
    status = models.SmallIntegerField(choices=STATUS_CHOICES)


class Tag(models.Model):
    """
        a model which contains tags, tags are the labels that are declare the technologies used in a project
    """
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class ProjectImage(models.Model):
    """
        project pictures
    """

    project = models.ForeignKey(Project, on_delete=models.PROTECT)
    picture = models.ImageField(upload_to='images/')
    # TODO: change the path after deploy
