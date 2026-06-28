from django.db import models
from django.conf import settings


class Department(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Semester(models.Model):
    name = models.CharField(max_length=20, unique=True, help_text="학기 명칭 (예: 2026년 1학기)")

    def __str__(self):
        return self.name


class Professor(models.Model):
    # Course가 아닌 Department에 종속 (학과 → 교수 → 과목)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='professors')
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.department.name} - {self.name}"


class Course(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='courses')
    # 어떤 교수가 가르치는지 연결
    professor = models.ForeignKey(Professor, on_delete=models.SET_NULL, null=True, blank=True, related_name='courses')
    name = models.CharField(max_length=100)
    semesters = models.ManyToManyField(Semester, related_name='courses', blank=True, help_text="개설된 수강 학기 목록")

    def __str__(self):
        return self.name


class ExamReview(models.Model):
    EXAM_TYPE_CHOICES = [
        ('객관식', '객관식'),
        ('단답형', '단답형'),
        ('서술형', '서술형'),
        ('논술형', '논술형'),
        ('코딩/실습', '코딩/실습'),
        ('기타', '기타'),
    ]

    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    professor = models.ForeignKey(Professor, on_delete=models.PROTECT)
    course = models.ForeignKey(Course, on_delete=models.PROTECT)
    semester = models.ForeignKey(Semester, on_delete=models.PROTECT, related_name='exam_reviews', help_text="수강 학기")

    difficulty = models.IntegerField()
    exam_info = models.TextField(max_length=500)
    exam_type = models.CharField(max_length=20, choices=EXAM_TYPE_CHOICES)
    review = models.TextField(max_length=10000)
    created_at = models.DateTimeField(auto_now_add=True)


class Test(models.Model):
    department = models.ForeignKey(Department, on_delete=models.PROTECT, null=True, blank=True)
    professor = models.ForeignKey(Professor, on_delete=models.PROTECT, null=True, blank=True)
    course = models.ForeignKey(Course, on_delete=models.PROTECT, related_name='tests')
    semester = models.ForeignKey(Semester, on_delete=models.PROTECT, null=True, blank=True, related_name='tests')

    exam_type = models.CharField(max_length=20, blank=True)
    test_format = models.CharField(max_length=50, blank=True)
    rating = models.PositiveIntegerField(default=3)

    title = models.CharField(max_length=200)       # 제목
    exam_info = models.TextField(blank=True)        # 난이도 줄글 (새로 추가)
    content = models.TextField()                    # 총평
    views = models.PositiveIntegerField(default=0)

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='tests')
    created_at = models.DateTimeField(auto_now_add=True)

    likes = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='liked_tests', blank=True)
    scraps = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='scrapped_tests', blank=True)

    def __str__(self):
        return f"[{self.course.name}] {self.title}"


class Comment(models.Model):
    test = models.ForeignKey(Test, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='comments')
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='replies')

    content = models.TextField()
    is_anonymous = models.BooleanField(default=False)
    likes = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='liked_comments', blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def get_anonymous_number(self):
        users = Comment.objects.filter(
            test=self.test,
            is_anonymous=True
        ).order_by('created_at').values_list('user_id', flat=True)
        ordered = list(dict.fromkeys(users))
        return ordered.index(self.user_id) + 1

    def __str__(self):
        return f"[{self.test.title}] {self.content[:20]}"