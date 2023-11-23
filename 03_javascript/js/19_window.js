/**
 * window 
 * - 브라우져 최상위객체
 * - 탭별로 하나씩 존재함.
 * - BOM : Browser Object Model - navigator, history, screen, ...
 * - DOM : Document Object Model - document 
 * - Javascript Object 
 * -...
 */
const test1 = () => {
    console.log(window);
};

/**
 * open
 * - 새창(탭/팝업)을 여는 함수
 * - 새 창의 window객체를 반환. 해당 창에 대한 제어가능
 */
const test2 = () => {
    // open(url, name, spec)
    // const newWindow = open('01_hellojs.html', 'hellojs', '');
    const newWindow = open('01_hellojs.html', 'hellojs', 'width=500, height=300, top=400, left=400');
    // const newWindow = open('01_hellojs.html', '_self'); // 현재 탭을 대체
    console.log(newWindow);
    console.log(newWindow.opener); // 현재창

    // 새 창을 3초후에 닫음
    setTimeout(() => {
        // newWindow.close();
        // newWindow.alert('🎈🎈🎈'); // 팝업창에 alert
        newWindow.document.write('<h1>🎄🎄🎄</h1>');
        newWindow.opener.alert('🎈🎈🎈'); // 현재창에 alert
    }, 3000);
}

/**
 * Timer API - setTimeout
 * - milli초 후에 callback함수 실행
 * - js시간은 쓰레드 스케줄링에 의해 늘어질 수 있다.
 */
const test3 = () => {
    const timeoutId = setTimeout(()=>{
        alert('🎆🎆🎆');
    }, 1000);

    console.log(timeoutId); // 임의의 숫자 반환
};

// IIFE
(()=> {
    setTimeout(()=>{
        console.log('회원가입후 더 많은 혜택을 누리세요~~');
    }, 5000);
})();

/**
 * setInterval(callbackFuntion, millis)
 * - 최초 millis초 후에 callbackFuntion을 실행
 * - clearInterval(id)로 취소하기 전까지
 * - millis초 간격으로 callbackFuntion을 실행
 */
let intervalId;
const test4 = () => {
    let i = 1;
    intervalId = setInterval(()=>{
        console.log(i++);
    }, 1000);
    console.log(intervalId, '번 인터벌이 등록되었습니다.');
};

/**
 * 사용자 타이머
 */
let timeoutId;

const test5 = () => {
    const message = document.getElementById("message");
    const timer = document.getElementById("sec");

    const messageVal = message.value;

    // 유효성검사
    if(!message.value || !timer.value) {
        alert('유효한 값을 입력하세요.');
        return;
    }

    timeoutId = setTimeout(()=>{
        alert("입력하신 내용은 " + messageVal + "입니다.");
        timeoutId = undefined; // id 제거
    }, timer.value*1000);

    console.log(timeoutId, '번 타이머가 설정되었습니다.');

    // 초기화
    message.value = '';
    timer.value = '';
};

// 취소
const test6 = () => {
    if(timeoutId) {
        clearTimeout(timeoutId);
        alert("타이머가 취소되었습니다.");
    }
};

/**
 * 초시계
 */
const f = (n) => n < 10 ? '0' + n : n;
const clock = () => {
    const d = new Date();
    const hh = f(d.getHours());
    const mm = f(d.getMinutes());
    const ss = f(d.getSeconds());
    console.log(`${hh}:${mm}:${ss}`);
    return `${hh}:${mm}:${ss}`;
}

// 실시간 시계 출력
const displayClock = () => document.querySelector('#clock-display').innerHTML = clock();
displayClock();
setInterval(displayClock, 1000);