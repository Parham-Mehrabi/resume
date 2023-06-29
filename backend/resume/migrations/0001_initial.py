# Generated by Django 4.2.2 on 2023-06-21 07:28

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Skill",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=120)),
                (
                    "tag",
                    models.SmallIntegerField(
                        choices=[
                            (0, "django"),
                            (1, "frontend"),
                            (2, "linux"),
                            (3, "node"),
                            (4, "others"),
                        ]
                    ),
                ),
                (
                    "tier",
                    models.SmallIntegerField(
                        choices=[(0, "familiar"), (1, "medium"), (2, "highlighted")]
                    ),
                ),
                ("details", models.CharField(max_length=248)),
            ],
        ),
    ]
