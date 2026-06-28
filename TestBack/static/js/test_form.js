// document.addEventListener('DOMContentLoaded', function () {
//     const departmentSelect = document.getElementById('department');
//     const professorSelect = document.getElementById('professor');
//     // 처음 로드되었을 때 전체 교수 옵션들을 복사해서 저장해둡니다.
//     const allProfessorOptions = Array.from(professorSelect.querySelectorAll('option'));

//     departmentSelect.addEventListener('change', function () {
//         const selectedDepartmentId = this.value; // 선택된 학과의 pk 값

//         // 교수 드롭다운을 일단 초기화 ('교수님을 선택하세요.'만 남김)
//         professorSelect.innerHTML = '';
//         professorSelect.appendChild(allProfessorOptions[0]); // 첫 번째 "선택하세요" 옵션

//         // 선택된 학과가 없으면(기본 문구를 선택한 경우) 교수 드롭다운을 그대로 비워둡니다.
//         if (!selectedDepartmentId) {
//             return;
//         }

//         // 전체 교수 옵션 중, 선택한 학과 ID와 일치하는 교수만 필터링해서 추가합니다.
//         allProfessorOptions.forEach(option => {
//             // "교수님을 선택하세요" 옵션은 건너뜁니다.
//             if (option.value === "") return;

//             // 백엔드가 심어놓은 data-department 속성 값을 가져옵니다.
//             const profDeptId = option.getAttribute('data-department');

//             // 일치하는 경우에만 드롭다운에 다시 추가
//             if (profDeptId === selectedDepartmentId) {
//                 professorSelect.appendChild(option);
//             }
//         });
//     });
// });

document.getElementById('department').addEventListener('change', function () {
    const selectedDept = this.value;
    const professorSelect = document.getElementById('professor');
    const options = professorSelect.querySelectorAll('option');

    options.forEach(option => {
        if (!option.value) return; // "선택하세요" 옵션은 유지
        if (option.dataset.department === selectedDept) {
            option.style.display = '';
        } else {
            option.style.display = 'none';
        }
    });

    // 학과 바꾸면 교수 선택 초기화
    professorSelect.value = '';
});