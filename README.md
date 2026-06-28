# toy_project 📝 에브리타임 시험후기 게시판

<br>

## 📌 프로젝트 소개

> 멋사대학교 학생들을 위한 시험후기 공유 플랫폼입니다.
> 학과 · 교수 · 과목별로 시험후기를 작성하고 공유할 수 있습니다.
>
## 개발 기간
> 26.05.21 ~ 26.06.28


🔗 **배포 URL** : https://toyproject2.store

<br>

## 👥 2조 팀원 소개

<table>
  <tr>
    <td align="center">기획/디자인</td>
    <td align="center">프론트엔드</td>
    <td align="center">프론트엔드</td>
    <td align="center">백엔드</td>
    <td align="center">백엔드</td>
  </tr>
  <tr>
    <td align="center">박채희</td>
    <td align="center">박다인</td>
    <td align="center">유채원</td>
    <td align="center">김규린</td>
    <td align="center">배서연</td>
  </tr>
</table>

<br>

## 🛠 기술 스택

<table>
  <tr>
    <td><b>Backend</b></td>
    <td>
      <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white"/>
      <img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white"/>
      <img src="https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td><b>Frontend</b></td>
    <td>
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
    </td>
  </tr>
  <tr>
    <td><b>Infra</b></td>
    <td>
      <img src="https://img.shields.io/badge/AWS EC2-FF9900?style=flat-square&logo=amazonec2&logoColor=white"/>
      <img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white"/>
      <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white"/>
    </td>
  </tr>
</table>

<br>

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 시험후기 CRUD | 시험후기 작성, 조회, 수정, 삭제 |
| 드롭다운 선택 | 학과 · 교수 · 과목 선택으로 데이터 입력 |
| 난이도 별점 | 1~5점 별점으로 시험 난이도 표시 |
| 좋아요 / 스크랩 | 유용한 후기 저장 및 추천 |
| 댓글 / 대댓글 | 익명 댓글 및 대댓글 작성 |
| 정렬 / 검색 | 최신순 · 좋아요순 · 조회수순 정렬 및 키워드 검색 |
| 회원 기능 | 회원가입, 로그인, 로그아웃 |

<br>

<br>

## ⚙️ 로컬 실행 방법

```bash
# 1. 저장소 클론
git clone https://github.com/2026-LIKELION-DS-TOY-PROJECT/toy_project.git
cd toy_project

# 2. 가상환경 생성 및 활성화
python -m venv myvenv
source myvenv/bin/activate  # Windows: myvenv\Scripts\activate

# 3. 패키지 설치
pip install -r requirements.txt

# 4. 마이그레이션
python manage.py migrate

# 5. 슈퍼유저 생성 (어드민 페이지 접속용)
python manage.py createsuperuser

# 6. 서버 실행
python manage.py runserver
```

<br>

