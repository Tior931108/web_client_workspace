
/**
 * Promise
 * - 비동기작업(producing code)1 + 콜백(consuming code)를 명쾌히 작성하는 문법
 * - Promise 객체는 status/result 상태값을 가진다.
 *  - status : pending(대기중..) -> fulfilled(정상) | rejected(오류)
 *  - result : undefined -> value | error 객체
 * - Promise 객체는 두개의 callback함수를 가진다.
 *  - resolve : 정상처리된 경우 호출하는 콜백
 *  - reject : 오류가 발생한 경우 호출하는 콜백
 */
document.querySelector('#btn1').addEventListener('click', ()=>{
    // Promise에 전달하는 함수
    // - resolve 함수
    // - reject 함수
    const promise = new Promise((resolve, reject)=> {
        try {
            // 난수를 생성시 짝수면 정상처리, 홀수면 오류라고 가정
            const n = Math.trunc(Math.random()*100 + 1); // 1 ~ 100
            console.log('난수가 생성되었습니다. : ', n);
            if( n % 2 == 0)
                resolve(n); // n => Promise#result
            else   
                throw new Error('홀수라서 실패!!');
        } catch (e) {
            reject(e); // e => Promise#result
        }
    });

    // callback 작성
    promise.then(()=>{
        // 성공(fulfilled)시 콜백
        console.log('🎉🎉🎉');
    }, (err)=>{
        // 실패(rejected)시 콜백
        console.error(err);
    });

    console.log(promise);
});

document.querySelector('#btn2').addEventListener('click', ()=>{
    delay(3000)
        .then(()=>{
            // 콜백함수
            console.log('🍔🍔🍔');
        });

    // 2초후에 🍙🍙🍙 출력하는 promise 만들기
    delay(2000)
        .then(()=>{
            console.log('🍙🍙🍙');
        });
});

const delay = (millis) => {
    return new Promise((resolve)=>{
        // 비동기작업
        setTimeout(() => resolve(), millis);
    });
};

document.querySelector('#btn3').addEventListener('click', ()=>{
    loadScript('js/24_test.js')
        .then(() => {
            test();
        });
});

const loadScript = (src) => new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve; // load이벤트 발생시 resolve(핸들러) 호출!
    // script.onload = () => resolve(123);
    document.head.append(script);
});

/**
 * Promise Chain
 * - Promise는 연속적으로 사용가능하다. 콜백지옥을 then지옥으로 대체.
 * - 암묵적으로 프라미스 객체반환 (반환한 값이 있다면, 새 promise의 result 값으로 사용된다.)
 * - 명시적으로 프라미스 객체를 반환 할수도 있다. 
 */
document.querySelector('#btn4').addEventListener('click', ()=> {
    // result 값 반환
    // new Promise((resolve)=> {
    //     // 비동기 작업
    //     resolve(2);
    // }).then((value)=>{
    //     // 콜백처리
    //     console.log(value); // 2
    //     return value * 2;
    // }).then((value)=>{
    //     console.log(value); // 4
    // });

    // promise 객체 반환
    template(3)
    .then((value) => {
        console.log(value); // 3
        return template(value * 2);
    })
    .then((value) => {
        console.log(value); // 6
        return template(value * 2);
    })
    .then((value) => {
        console.log(value); // 12
        return template(value * 2);
    })

    // 1초후에 🥩 , 1초후에 🍙, 1초후에 🍛
    // then 절 연속 사용 (명시적으로 promise 반환하기)
    delay(1000)
    .then(() => {
        console.log('🥩🥩🥩');
        return delay(1000);
    })
    .then(() => {
        console.log('🍙🍙🍙');
        return delay(1000);
    })
    .then(() => {
        console.log('🍛🍛🍛');
        return delay(1000);
    });


}); 

const template = (value) => new Promise ((resolve) => {
    resolve(value);
});

/**
 * - change BGColor : Promise객체를 반환하는 함수 (비동기작업)
 * - then절(콜백함수)
 */
document.querySelector('#btn5').addEventListener('click', ()=> {
    changeBGColor('red', 1000)
        .then(()=>changeBGColor('orange', 1000))
        .then(()=>changeBGColor('yellow', 1000))
        .then(()=>changeBGColor('green', 1000))
        .then(()=>changeBGColor('blue', 1000))
        .then(()=>changeBGColor('navy', 1000))
        .then(()=>changeBGColor('purple', 1000));
});

const changeBGColor = (color, miliis) => {
    return new Promise(resolve => {
        setTimeout(() => {
            document.querySelector(".box").style.backgroundColor = color;
            resolve();
        }, miliis);
    });
};