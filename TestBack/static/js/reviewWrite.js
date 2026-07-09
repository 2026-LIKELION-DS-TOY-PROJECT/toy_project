document.addEventListener("DOMContentLoaded", () => {
    console.log("admit.js 연결 완료!");

    const stars = document.querySelectorAll(".star");
    const difficultyInput = document.getElementById("difficulty");

    // 별점 제어 로직
    if (stars.length > 0 && difficultyInput) {
        stars.forEach((star) => {
            // 호버했을 때 별 채우기
            star.addEventListener("mouseover", () => {
                const currentVal = parseInt(star.getAttribute("data-value"));
                highlightStars(currentVal);
            });

            // 호버 나갔을 때 원래 선택했던 값으로 복구
            star.addEventListener("mouseout", () => {
                const selectedVal = parseInt(difficultyInput.value) || 0;
                highlightStars(selectedVal);
            });

            // 클릭해서 별점 확정 (hidden input에 값 할당)
            star.addEventListener("click", () => {
                const currentVal = star.getAttribute("data-value");
                difficultyInput.value = currentVal;
                console.log("현재 저장된 난이도:", currentVal);
                highlightStars(currentVal);
            });
        });
    } else {
        console.error(
            "별점 관련 요소를 찾을 수 없습니다. HTML 태그를 확인하세요.",
        );
    }

    // 별 모양 바꿔주는 함수
    function highlightStars(count) {
        stars.forEach((star) => {
            const starVal = parseInt(star.getAttribute("data-value"));
            if (starVal <= count) {
                star.innerText = "★";
            } else {
                star.innerText = "☆";
            }
        });
    }

    const textarea = document.getElementById("content");
    const currentChars = document.getElementById("current-chars");

    if (textarea && currentChars) {
        textarea.addEventListener("input", () => {
            currentChars.innerText = textarea.value.length;
        });
    }
});

// 기존 총평 카운터 (input → input + compositionend로 교체)
const textarea = document.getElementById("content");
const currentChars = document.getElementById("current-chars");
if (textarea && currentChars) {
    textarea.addEventListener("input", () => {
        currentChars.innerText = textarea.value.length;
    });
    textarea.addEventListener("compositionend", () => {
        // 한글 IME 대응
        currentChars.innerText = textarea.value.length;
    });
}

// 시험정보 카운터 추가 (신규)
const examInfoTextarea = document.getElementById("exam_info");
const currentChars1 = document.getElementById("current-chars1");
if (examInfoTextarea && currentChars1) {
    examInfoTextarea.addEventListener("input", () => {
        currentChars1.innerText = examInfoTextarea.value.length;
    });
    examInfoTextarea.addEventListener("compositionend", () => {
        // 한글 IME 대응
        currentChars1.innerText = examInfoTextarea.value.length;
    });
}
