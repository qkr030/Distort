const texts = [
    "자극과 왜곡이 넘쳐나는 시대에 여러분은 무엇을 보고 믿으며 확신하시나요?",
    "몇가지 체험을 통해 자신은 왜곡된 내용에 얼마나 흔들리지 않는지 시험해보세요.",
];
let currentIndex = 0;
let intervalId; // intervalId를 전역 변수로 선언

function changeContent() {
    const textElement = document.querySelector('.text');
    
    // 텍스트가 바뀌기 전에 기존 텍스트를 서서히 사라지게 함
    textElement.style.opacity = 0;

    setTimeout(() => {
        currentIndex++;
        if (currentIndex >= texts.length) {
            // 마지막 텍스트가 변경된 후에는 더 이상 변경하지 않음
            textElement.innerHTML = texts[currentIndex - 1]; // 마지막 텍스트 유지
            clearInterval(intervalId); // 더 이상 텍스트 변경을 중지
            return; // 더 이상 변경하지 않음
        }
        textElement.innerHTML = texts[currentIndex];
        textElement.style.opacity = 1; // 텍스트가 서서히 나타나도록 함
    }, 500); // 0.5초 후에 텍스트를 변경

    // 이미지를 표시하기 위한 타이밍 설정 (이미지 나오는 시간 조금 늘림)
    setTimeout(() => {
        const imageElement = document.querySelector('.img');
        imageElement.style.display = "block"; // 이미지 표시
    }, 2500); // 이미지 표시 시간을 2.5초로 늘림
}

intervalId = setInterval(changeContent, 2300); // 2.3초마다 텍스트 변경
