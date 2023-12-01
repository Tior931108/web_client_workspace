/**
 * async 
 * - 일반함수의 프라미스화 지원하는 문법
 */
document.querySelector('#btn1').addEventListener('click', () => {
  const promise = foo();
  console.log(promise);  

  promise.then((value) => console.log(value));
});

const foo = async () => 100; // state가 fulfilled, result가 100인 프라미스 반환
// const foo = () => new Promise((resolve) => resolve(100));

/**
 * await
 * - async함수 안에서만 사용가능
 * - promise 앞에서 사용. 
 * - promise가 fulfilled될때까지 대기해서, result값을 반환
 */
document.querySelector('#btn2').addEventListener('click', async () => {
  // bar()
  //   .then((value) => console.log(value));  

  const value = await bar();
  console.log(value);
});

const bar = () => new Promise((resolve) => {
  // 3초후에 fulfilled/🍕
  setTimeout(() => resolve('🍕'), 3000);
});

/**
 * Timer API
 */
document.querySelector('#btn3').addEventListener('click', async () => {
  const value = await delay(3000);
  console.log(value);
});

const delay = (millis) => new Promise((resolve) => {
  setTimeout(() => resolve('🍳'), millis);
});

/**
 * DOM
 */
document.querySelector('#btn4').addEventListener('click', async () => {
  await loadScript('js/24_test.js'); // promise가 fulfilled(resolve 호출)까지 대기
  test();
});

const loadScript = (src) => new Promise((resolve) => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => resolve();
  document.head.append(script);
});

/**
 * 학생정보
 */
document.querySelector('#btn5').addEventListener('click', async () => {
  const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';
  const response = await fetch(url);
  const student = await response.json();
  console.log(student);
});

/**
 * avatar 화면 출력, 3초후에 제거
 */
document.querySelector('#btn6').addEventListener('click', async () => {
  const url = 'https://api.github.com/users/shqkel';

  const {data : {avatar_url}} = await axios(url);
  console.log(avatar_url);

  const img = await new Promise((resolve) => {
    const img = document.createElement("img");
    img.src = avatar_url;
    img.style = 'width: 200px; border-radius: 50%';
    img.onload = () => setTimeout(() => resolve(img), 3000);
    document.querySelector('.img-wrapper').append(img);
  });
  img.remove();
});