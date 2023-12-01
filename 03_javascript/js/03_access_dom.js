// DOM Document Object Model
// html문서(텍스트)를 계층구조를 반영해 javascript객체로 변환
// document
console.log(document);

/**
 * document.getElementById(id: string): HTMLElement | null
 */
function getById(){
  const li1 = document.getElementById("li1");
  console.log(li1, typeof li1);
  console.dir(li1); // 객체 계층구조로 열람

  console.log(li1.innerHTML); // getter
  li1.innerHTML = '안녕 자바스크립트 1'; // setter

  const notExist = document.getElementById("aslkdjflasdfjasdf"); 
  // null : object타입의 값없음 의미
  console.log(notExist, typeof notExist); // null 'object'

}

/**
 * document.getElementsByTagName(tagName: string): object[] 
 */
function getByTag(){
  const list = document.getElementsByTagName("li");
  console.log(list, typeof list);

  for(let i = 0; i < list.length; i++) {
    console.dir(list[i]);
    list[i].style.backgroundColor = 'hotpink';
    list[i].style.color = 'white';
  }
}

/**
 * document.getElementsByClassName(class: string): object[]
 */
function getByClass(){
  const group1 = document.getElementsByClassName("group1");
  // const groups = document.getElementsByClassName("group1 group2");
  console.log(group1, typeof groupt1);

  // Hello JS 1 [GROUP1]
  for(let i = 0; i < group1.length; i++) {
    group1[i].innerHTML += " [GROUP1]";
  }

}

/**
 * getElementsByName(name: string): object[]
 */
function getByName() {
  const hobbies = document.getElementsByName("hobby");
  console.log(hobbies, typeof hobbies);

  let hobbyChecked = '';
  for(let i = 0; i < hobbies.length; i++) {
    if(hobbies[i].checked) {
      hobbyChecked += hobbies[i].value + " ";
    }
  }

  alert(hobbyChecked);
}

/**
 * [name=hobby] 체크박스를 모두 선택/해제
 */
function checkAll(){
  const hobbies = document.getElementsByName("hobby");
  const all = document.getElementById("all");
  // id가 유일하기 때문에 해당 아이디를 변수처럼 바로 사용가능

  for(let i = 0; i < hobbies.length; i++){
    hobbies[i].checked = all.checked;
  }
}

function test1() {
  // const name = document.getElementById("name");

  // const inputs = document.getElementsByTagName("input");
  // const name = inputs[4];
  
  // const inputs = document.getElementsByClassName("user-input");
  // const name = inputs[0];

  const inputs = document.getElementsByName("name");
  const name = inputs[0];

  console.log(inputs);
  console.dir(name);
  alert(name.value);
}

function test2() {
  const scoreInput = document.getElementById("score");
  console.log(scoreInput.value);
  const span = document.getElementById("display-score");
  span.innerHTML = scoreInput.value;
}

/**
 * document.querySelector(selector: string): HTMLElement | null
 * - css선택자를 이용해서 하나의 DOM요소를 반환
 * - 여러개의 요소를 반환하는 선택자를 사용한 경우 첫번째 요소만 반환
 */
function _querySelector() {
  const li1 = document.querySelector("#li1");
  console.log(li1);
  li1.innerHTML = "안녕";

  const li = document.querySelector("li.group2");
  console.log(li);
}

/**
 * css선택자를 이용해서 여러개 DOM요소를 배열로 반환
 */
function _querySelectorAll() {
  const list = document.querySelectorAll("li.group1");
  console.log(list);
  
  // list.innerHTML = 'xxxxx'; // 배열객체에는 innerHTML 속성이 없다.
  for(let i = 0; i < list.length; i++) {
    list[i].innerHTML = 'xxxxxx';
  }

}