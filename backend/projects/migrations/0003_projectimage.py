# Generated by Django 4.2.2 on 2023-06-23 11:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_rename_tags_tag'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(upload_to='images/')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='projects.project')),
            ],
        ),
    ]