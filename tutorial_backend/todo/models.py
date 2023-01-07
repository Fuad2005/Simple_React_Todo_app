from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.
class Deadline(models.Model):
    days = models.IntegerField(validators=[MinValueValidator(0), ])
    hours = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(23)])

    def __str__(self):
        return str(self.days)+' day(s) '+str(self.hours)+' hour(s)'


class Todo(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title