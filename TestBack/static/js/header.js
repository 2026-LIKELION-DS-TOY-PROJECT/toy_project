// 1. 모달 열기 (좋아요/스크랩 중 뭘 클릭했냐에 따라 텍스트 다르게 출력되도록)
function openWarningModal(type) {
    const modal = document.getElementById('warning-modal-wrap');
    const textElement = document.getElementById('warning-modal-text');
    
    if (type === 'like') {
        textElement.innerText = '내가 작성한 글에는 좋아요를 누를 수 없습니다.';
    } else if (type === 'scrap') {
        textElement.innerText = '내가 작성한 글은 스크랩할 수 없습니다.';
    }
    
    if (modal) modal.style.display = 'flex';
}

// 2. 바깥 여백(블러 영역) 클릭 시 모달 닫아줌
document.addEventListener('DOMContentLoaded', () => {
    const warningModal = document.getElementById('warning-modal-wrap');
    
    if (warningModal) {
        warningModal.addEventListener('click', function(e) {
            // 클릭한 대상(e.target)이 안쪽의 하얀 박스 (x), 바깥쪽 블러일 때만 닫기
            if (e.target === warningModal) {
                warningModal.style.display = 'none';
            }
        });
    }
});