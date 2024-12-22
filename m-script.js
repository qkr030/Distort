const texts = [
    "자극과 왜곡이 넘쳐나는 시대에 여러분은 무엇을 보고 믿으며 확신하시나요?",
    "몇가지 체험을 통해 자신은 왜곡된 내용에 얼마나 흔들리지 않는지 시험해보세요.",
];
let currentIndex = 0;
let intervalId; // intervalId를 전역 변수로 선언

function changeContent() {
    const textElement = document.querySelector('.text');
    
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
        textElement.style.opacity = 1;
    }, 500); // 0.5초 후에 텍스트를 변경

    setTimeout(() => {
        const imageElement = document.querySelector('.img');
        imageElement.style.display = "block"; // 이미지 표
    }, 3800); 


    document.addEventListener("DOMContentLoaded", function() {
        const imgDiv = document.querySelector('.img');
        imgDiv.style.display = 'block'; // 페이지 로드 시 이미지 표시
    });
    
}

intervalId = setInterval(changeContent, 2300); 