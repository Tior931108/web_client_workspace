
/**
 * 동기 Synchronous : 짝을 맞춘다. (함수호출-리턴과 그 다음실행의 짝을 맞춘다.)
 * 비동기 Asynchronous : 짝을 맞추지 않는다. (함수호출-리턴과 그 다음실행의 짝을 맞추지 않는다.)
 * 
 * - js runtime은 싱글쓰레드로 작동한다.
 * - 시간이 오래 걸리는 작업(timer api, dom , event처리)은 백그라운드로 치워두었다가 이후에 실행 (비동기처리)
 * 
 * 1. Web API Container에 등록
 * 2. Callback Queue 추가
 * 3. Event Loop에 의해 callstack에 추가 (callback empty only!)
 */

document.querySelector("#btn1").addEventListener('click', ()=> {
    // 동기처리
    const value = foo();
    console.log(value); // 100

    // 비동기처리
    let value2;
    setTimeout(() => {
        value2 = 200;
        console.log(value2); // 200
    }, 1000);
    // console.log(value2); // undefined

});

const foo = () => 100;

/**
 * DOM에 요소를 추가/삭제하는 작업은 비동기로 처리된다.
 */
document.querySelector("#btn2").addEventListener('click', () => {
    loadScript('js/24_test.js', () => {
        test();
    });
    // test(); // test.js 안의 test 함수
               // Uncaught ReferenceError: test is not defined
});

const loadScript = (src, callback) => {
     // js/test.js를 동적으로 로드하고, 그 안의 함수 test를 호출
     const script = document.createElement('script'); // <script></script>
     script.src= src; // <script src="js/24_test.js"></script>
     script.onload = callback; // dom에 load가 완료될때 호출되는 핸들러
     document.head.append(script);
};

/**
 * 1초간격으로 배경색을 빨 -> 주 -> 노 -> 초 -> 파 -> 남 -> 보
 * - setTimeout 연속 사용
 * - callback hell (콜백지옥) 에 빠질 수가 있다.
 */
document.querySelector('#btn3').addEventListener('click', () => {
    
    let index = 0;
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'violet']
    const box = document.querySelector(".box");

    function changeColor() {
        box.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // 다음 컬러 진행

        setTimeout(changeColor, 1000);
    };

    changeColor(); // 함수호출하여 setTimeout 연속 사용
});