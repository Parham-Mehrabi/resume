from django.db import models


class Resume(models.Model):
    """
        traditional Resume, created in backend for easier edit
    """
    LANGUAGES_CHOICES = [(0, 'fa'), (1, 'en')]
    language = models.SmallIntegerField(choices=LANGUAGES_CHOICES, default=0)
    body = models.TextField()


class Skill(models.Model):
    """
        a model to define my skills more specifically
    """

    TAG_CHOICES = [
        (0, 'django'),
        (1, 'frontend'),
        (2, 'linux'),
        (3, 'node'),
        (4, 'others'),
    ]
    TIER_CHOICES = [
        (0, 'familiar'),
        (1, 'medium'),
        (2, 'highlighted')
    ]
    name = models.CharField(max_length=120)
    tag = models.SmallIntegerField(choices=TAG_CHOICES)
    tier = models.SmallIntegerField(choices=TIER_CHOICES)
    details = models.CharField(max_length=248, null=True, blank=True)

    def __str__(self):
        return self.name