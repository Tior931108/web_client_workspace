// 전역

/**
 * 자바스크립트 자료형
 * - 변수의 자료형이 값에 따라 지정 (dynamic typing)
 * 
 * 1. undefined
 * 2. string
 * 3. number
 * 4. boolean
 * 5. array
 * 6. object
 * 7. function
 */
function testType() {
    // 지역

    // 변수선언 키워드 let/const
    let a; // undefined
    console.log(a, typeof a); // undefined 'undefined'

    a = 100;
    console.log(a, typeof a); // 100 'number'

    a = 'hi';
    console.log(a, typeof a); // hi string

    const name = '홍길동';
    console.log(name, typeof name); // 홍길동 string
    const age = 33;
    console.log(age, typeof age); // 33 'number'
    const married = true;
    console.log(married, typeof married); // true 'boolean'
    const arr = [1,2,3,4,5];
    console.log(arr, typeof arr); // (5) [1, 2, 3, 4, 5] 'object'

    const odj = {
        username : 'honggd' ,
        password : '1234'
    };
    console.log(odj, typeof obj); // {username: 'honggd', password: '1234'} Object 

    function foo() {
        console.log('🥓🥓🥓');
    }

    console.log(foo, typeof foo); // foo() {console.log('🥓🥓🥓');} 'function'
}

testType();