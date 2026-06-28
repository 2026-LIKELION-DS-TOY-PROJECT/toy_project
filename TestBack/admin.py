from django.contrib import admin
from .models import Department, Semester, Professor, Course, Test, Comment

admin.site.register(Department)
admin.site.register(Semester)
admin.site.register(Professor)
admin.site.register(Course)
admin.site.register(Test)
admin.site.register(Comment)