from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from .models import User

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('TestBack:test_list')
        else:
            return render(request, 'users/login.html', {'error': '아이디 또는 비밀번호가 틀렸습니다.'})
    return render(request, 'users/login.html')

def logout_view(request):
    logout(request)
    return redirect('TestBack:test_list')

def signup_view(request):
    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '').strip()
        password_confirm = request.POST.get('password_confirm', '').strip()
        name = request.POST.get('name', '').strip()
        grade = request.POST.get('grade')

        # 필수 항목 체크
        if not username or not password or not name:
            return render(request, 'users/signup.html', {'error': '모든 항목을 입력해주세요.'})

        # 비밀번호 확인 체크
        if password != password_confirm:
            return render(request, 'users/signup.html', {'error': '비밀번호가 일치하지 않습니다.'})

        # 중복 아이디 체크
        if User.objects.filter(username=username).exists():
            return render(request, 'users/signup.html', {'error': '이미 존재하는 아이디입니다.'})

        user = User.objects.create_user(
            username=username,
            password=password,
            name=name,
            grade=grade
        )
        login(request, user)
        return redirect('TestBack:test_list')
    return render(request, 'users/signup.html')