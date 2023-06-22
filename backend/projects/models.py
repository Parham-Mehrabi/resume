from django.db import models


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

    github_link = models.CharField(max_length=120, blank=True, null=True)
    project_link = models.CharField(max_length=120, blank=True, null=True)

    description = models.TextField()
    status = models.SmallIntegerField(choices=STATUS_CHOICES)


class Tag(models.Model):
    """
        a model which contains tags, tags are the labels that are declare the technologies used in a project
    """
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
