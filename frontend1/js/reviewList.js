document.addEventListener('DOMContentLoaded', () => {
    console.log("board.js 가 성공적으로 로드되었습니다.");

    // 최신순, 추천순 탭 전환
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterType = button.getAttribute('data-filter');
            console.log(`선택된 필터 탭: ${filterType}`);
        });
    });

    const pageNumbers = document.querySelectorAll('.page-num');

    pageNumbers.forEach(page => {
        page.addEventListener('click', () => {
            pageNumbers.forEach(p => p.classList.remove('active'));
            page.classList.add('active');
            console.log(`현재 페이지: ${page.innerText}`);
        });
    });
});