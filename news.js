// 모든 'clickable' 클래스를 가진 요소 선택
const clickableElements = document.querySelectorAll('.clickable');
let clickCount = 0; // 클릭한 요소의 수

// 각 요소에 클릭 이벤트 리스너 추가
clickableElements.forEach(element => {
    element.addEventListener('click', function() {
        // 'active' 클래스가 없을 때만 추가하여 색상 고정
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            clickCount++; // 클릭 수 증가
        }

        // 클릭 수가 3개가 되었을 때 배경 색상 변경
        if (clickCount === 3) {
            document.body.classList.add('changed-background');
        } else if (clickCount < 3) {
            document.body.classList.remove('changed-background');
        }
    });
});