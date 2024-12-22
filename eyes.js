$(document).ready(function () {
    const eyesContainer = $('.eyes-container');

    // 화면 크기에 맞게 눈 추가
    const eyeSize = 140; // 눈 크기와 간격 포함 크기
    const numRows = Math.floor(window.innerHeight / eyeSize); // 세로 개수 (아래쪽 여백 제거)
    const numCols = Math.ceil(window.innerWidth / eyeSize);  // 가로 개수

    // 총 눈 개수 조정 (8개를 빼기)
    const totalEyes = numRows * numCols - 8; // 기존 계산에서 8개 빼기

    let eyeCount = 0; // 생성된 눈 개수 카운터
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (eyeCount >= totalEyes) break; // 총 눈 개수를 초과하면 생성 중단
            const eye = `
                <div class="eye" style="opacity: 0;">
                    <div class="pupil">
                        <div class="highlight"></div>
                    </div>
                </div>`;
            eyesContainer.append(eye); // 각 눈을 컨테이너에 추가
            eyeCount++; // 생성된 눈 개수 증가
        }
        if (eyeCount >= totalEyes) break; // 행 단위로도 확인
    }

    // 랜덤으로 눈을 보이게 하기
    $('.eye').each(function () {
        const randomDelay = Math.random() * 5000; // 0부터 3000ms 사이의 랜덤 지연 시간
        $(this).delay(randomDelay).animate({ opacity: 1 }, 500); // 랜덤 시간 후에 보이게 함
    });

    // 마우스 움직임에 따라 눈동자 이동
    $(document).mousemove(function (event) {
        $('.eye').each(function () {
            const centerX = $(this).offset().left + $(this).width() / 2;
            const centerY = $(this).offset().top + $(this).height() / 2;

            const dx = event.pageX - centerX;
            const dy = event.pageY - centerY;
            const angle = Math.atan2(dy, dx);

            const maxDistance = 20; // 동공 이동 거리 제한
            const distance = Math.min(maxDistance, Math.sqrt(dx * dx + dy * dy));
            const pupilX = Math.cos(angle) * distance;
            const pupilY = Math.sin(angle) * distance;

            $(this).find('.pupil').css({
                transform: `translate(${pupilX}px, ${pupilY}px)`
            });
        });
    });
    
});
