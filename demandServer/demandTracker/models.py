from django.db import models

# Create your models here.


class State(models.Model):
    name = models.Charfield(max_length=25)

    def __str__(self):
        return self.name
