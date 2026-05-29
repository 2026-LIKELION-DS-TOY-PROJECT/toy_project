document.addEventListener("DOMContentLoaded", () => {
    checkEmptyComments();
})

function checkEmptyComments() {
    const comments = document.querySelectorAll(".single-comment, .single-reply")
    const emptyState = document.querySelector(".none")
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

function confirmDelete() {
    if (!currentDeleteType || !currentDeleteId) return;

    let deleteUrl = "";

    if (currentDeleteType === 'post') {
        deleteUrl = `/post/${currentDeleteId}/delete/`;
    } else if (currentDeleteType === 'comment') {
        deleteUrl = `/comment/${currentDeleteId}/delete/`;
    }

    window.location.href = deleteUrl; 
}