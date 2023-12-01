// 전역 
let a = 10;
console.log(a);

function foo() {
  // 지역
  let b = 20;
  console.log(b); 

  // 전역변수 접근
  a = 30;
}

if(true) {
  // 지역
  let c = 99;
  console.log(c);
}

for(let i = 0; i < 5; i++) {
  // 지역
  console.log(i);
}

// console.log(i); // Uncaught ReferenceError: i is not defined

let j; 
for(j = 0; j < 5; j++) {
  console.log(j);
}

/**
 * 변수사용시 사용하는 키워드
 * - const 블럭스코프. 상수선언시 
 * - let 블럭스코프. 변수선언시 
 * - var 함수스코프(함수블럭만 인정) 변수선언시.  
 */
function test(){ 
  var a = 10;
  var a = 20; // 문법오류 아님
  console.log(a);

  const b = 123;
  // b = 456; // Uncaught TypeError: Assignment to constant variable.

  let c = 1;
  c = 2;
  console.log(c);

  // let c = 'ㅋㅋㅋ'; // Uncaught SyntaxError: Identifier 'c' has already been declared 
}