document.addEventListener("DOMContentLoaded", () => {
    checkEmptyComments();
});

function checkEmptyComments() {
    const comments = document.querySelectorAll(
        ".single-comment, .single-reply",
    );
    const emptyState = document.querySelector(".none");
    const commentCountText = document.querySelector(".comment-count");

    if (!emptyState) return;

    if (commentCountText) {
        commentCountText.innerText = comments.length;
    }

    if (comments.length == 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }
}

let currentDeleteType = null;
let currentDeleteId = null;

// 모달 열기
function openDeleteModal(type, id) {
    currentDeleteType = type;
    currentDeleteId = id;

    const modal = document.querySelector(".delete-modal-wrap");

    if (modal) modal.classList.add("show");
}

// 모달 닫기
function closeDeleteModal() {
    const modal = document.querySelector(".delete-modal-wrap");

    if (modal) modal.classList.remove("show");

    currentDeleteType = null;
    currentDeleteId = null;
}



// 페이지를 넘나들어야 하므로 백엔드 도움이 필요하지만 사정상 프론트에서 구현
function confirmDelete(testPk) {
    // 1. 다인 방식: HTML에서 괄호 안에 testPk를 직접 넘겨준 경우 (게시글 삭제)
    if (testPk) {
        const form = document.getElementById('delete-form-post-' + testPk);
        if (form) {
            sessionStorage.setItem('postDeleted', 'true'); // 포스트잇 붙이기
            form.submit();
        }
        return; // 여기서 함수 끝내기
    }

    // 2. 팀원 방식: testPk가 안 넘어오고 팀원의 변수가 설정된 경우
    if (typeof currentDeleteType !== 'undefined' && currentDeleteType && currentDeleteId) {
        const formId = `delete-form-${currentDeleteType}-${currentDeleteId}`;
        const form = document.getElementById(formId);

        if (form) {
            if (currentDeleteType === 'post') {
                sessionStorage.setItem('postDeleted', 'true');
            }
            form.submit();
        }
        // 모달 닫기 함수가 있다면 실행
        if (typeof closeDeleteModal === 'function') closeDeleteModal();
    }
}







// 대댓글 작성 폼 열고 닫기
function toggleReplyForm(commentId) {
    const form = document.getElementById(`reply-form-${commentId}`);

    // display가 none(숨김)이거나 안 적혀있으면 -> flex로 바꿔서 보여줌
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
}





document.addEventListener("DOMContentLoaded", () => {
    const loadMoreBtn = document.getElementById("load-more-btn");
    
    // 더보기 버튼이 화면에 존재할 때만 실행
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            const hiddenArticles = document.querySelectorAll(".hidden-article"); // 숨겨진 모든 hidden-article 찾아서
            
            hiddenArticles.forEach(article => {
                article.classList.remove("hidden-article"); // 찾은 게시글들의 숨김 처리 제거해 화면에 보여줌
            });
            
            loadMoreBtn.style.display = "none"; // 더이상 보여줄 글 없으므로 더보기 버튼 자체가 안 보이게
        });
    }
});



function openDeleteModal() {
    const modal = document.querySelector('.delete-modal-wrap');
    if (modal) modal.style.display = 'flex';
}
function closeDeleteModal() {
    const modal = document.querySelector('.delete-modal-wrap');
    if (modal) modal.style.display = 'none';
}





// 삭제할 댓글's 폼 ID 임시 저장할 변수
let targetCommentFormId = null;

function openCommentDeleteModal(formId) {
    targetCommentFormId = formId; // 클릭한 폼의 ID를 기억
    const modal = document.getElementById('comment-delete-modal');
    if (modal) modal.style.display = 'flex';
}

function closeCommentDeleteModal() {
    targetCommentFormId = null; // 취소하면 기억 지움
    const modal = document.getElementById('comment-delete-modal');
    if (modal) modal.style.display = 'none';
}

function confirmCommentDelete() {
    if (targetCommentFormId) {
        // 기억해둔 폼 찾아서 실제로 삭제 진행
        const form = document.getElementById(targetCommentFormId);
        if (form) form.submit();
    }
}











document.addEventListener('DOMContentLoaded', () => {
    const alertBtn = document.querySelector('.alert'); // 종 모양 알림 class
    const profileBtn = document.querySelector('.profile-picture'); // 프로필 사진 class
    const devModal = document.getElementById('dev-modal-wrap');

    // 1. 알림 또는 프로필 클릭 시 모달 열리고
    function openDevModal() {
        if (devModal) devModal.style.display = 'flex';
    }

    if (alertBtn) alertBtn.addEventListener('click', openDevModal);
    if (profileBtn) profileBtn.addEventListener('click', openDevModal);

    // 2. 바깥 여백(블러) 클릭 시 모달 닫힘
    if (devModal) {
        devModal.addEventListener('click', function(e) {
            if (e.target === devModal) {
                devModal.style.display = 'none';
            }
        });
    }
});
