from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name = models.CharField(max_length=50)
    grade = models.IntegerField(default=1)

    def __str__(self):  # 클래스 안에 쓰기!
        return self.username