document.addEventListener('DOMContentLoaded', function() {
    const allImages = document.querySelectorAll('img'); // 모든 이미지 선택
    const gImages = document.querySelectorAll('.g-img'); // g-img 클래스가 있는 이미지 선택
    const headline = document.querySelector('.headline'); // 헤드라인 요소 선택

    // 모든 이미지를 숨기기
    allImages.forEach(img => {
        img.style.visibility = 'hidden'; // 모든 이미지 숨기기
        img.style.opacity = '0'; // 모든 이미지의 opacity를 0으로 설정
    });

    // 첫 번째 이미지를 보이게 하기
    const firstImage = allImages[0]; // 항상 첫 번째 이미지 선택
    firstImage.style.visibility = 'visible'; // 첫 번째 이미지 보이게 설정
    firstImage.style.opacity = '1'; // 첫 번째 이미지의 opacity를 1로 설정

    // 이미지를 랜덤하게 섞는 함수
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // 배열 요소 교환
        }
        return array;
    };

    // 이미지 배열을 랜덤하게 섞기
    const shuffledImages = shuffleArray(Array.from(allImages));

    // 초기 지연 시간 설정
    let delay = 1000; // 1초로 시작
    let currentIndex = 0; // 현재 인덱스
    let isClicking = false; // 클릭 중인지 여부를 나타내는 변수

    // 1초마다 다음 이미지를 보이게 하는 함수
    const showNextImage = () => {
        if (isClicking) return; // 클릭 중이면 함수 종료

        if (currentIndex < shuffledImages.length - 1) {
            currentIndex++; // 인덱스 증가
            const nextImage = shuffledImages[currentIndex];
            nextImage.style.visibility = 'visible'; // 다음 이미지 보이게 설정
            nextImage.style.opacity = '1'; // 다음 이미지의 opacity를 1로 설정

            // 지연 시간을 점점 줄이기
            delay = Math.max(100, delay - 100); // 최소 0.1초(100ms)로 설정
            setTimeout(showNextImage, delay); // 다음 이미지를 보이게 하기
        }
    };

    // 클릭 이벤트 추가 (g-img 클래스에만 적용)
    gImages.forEach(image => {
        image.addEventListener('click', function() {
            isClicking = true; // 클릭 중임을 표시

            // 클릭한 이미지 외의 모든 이미지 숨기기
            allImages.forEach(img => {
                img.style.visibility = 'hidden'; // visibility를 hidden으로 설정
                img.style.opacity = '0'; // opacity를 0으로 설정하여 부드럽게 사라지게 함
            });

            // 클릭한 이미지 보이게 하기
            this.style.visibility = 'visible'; // 클릭한 이미지는 보이게 설정
            this.style.opacity = '1'; // 클릭한 이미지의 opacity를 1로 설정

            // 배경색과 헤드라인 색 변경
            document.body.style.backgroundColor = 'rgb(255, 252, 159)'; // 원하는 색으로 변경
            headline.style.color = 'orange'; // 헤드라인 색 변경
            headline.textContent = 'Clarify'; // 헤드라인 텍스트 변경

            // 2초 후에 원래 상태로 되돌리기
            setTimeout(() => {
                // 배경색과 헤드라인 색 원래대로 되돌리기
                document.body.style.backgroundColor = '#161616'; // 원래 배경색으로 되돌리기
                headline.style.color = 'white'; // 원래 헤드라인 색으로 되돌리기
                headline.textContent = 'Distort'; // 원래 헤드라인 텍스트로 되돌리기

                // 모든 이미지를 숨기기
                allImages.forEach(img => {
                    img.style.visibility = 'hidden'; // visibility를 hidden으로 설정
                    img.style.opacity = '0'; // opacity를 0으로 설정하여 부드럽게 사라지게 함
                });

                // 인덱스와 지연 시간 초기화
                currentIndex = 0; // 인덱스 초기화
                delay = 1000; // 지연 시간 초기화 (1초로 설정)
                isClicking = false; // 클릭 중 아님으로 설정

                // 첫 번째 이미지를 다시 보이게 하기
                firstImage.style.visibility = 'visible'; // 첫 번째 이미지 보이게 설정
                firstImage.style.opacity = '1'; // 첫 번째 이미지의 opacity를 1로 설정

                // 랜덤하게 이미지를 보이게 하는 타이머 시작
                setTimeout(showNextImage, 500); // 0.5초 후에 첫 번째 이미지 보이기
            }, 2000);
        });
    });

    // 랜덤하게 이미지를 보이게 하는 타이머 시작
    setTimeout(showNextImage, 500); // 0.5초 후에 첫 번째 이미지 보이기
});
