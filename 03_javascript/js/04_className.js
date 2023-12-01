/**
 * class를 통한 제어
 * - className (문자열)
 * - classList객체
 *    - add(className: string)
 *    - remove(className: string)
 *    - toggle(className: string)
 */
function checkSubject(checkbox) {
  console.log('checkSubject', checkbox);
  // 부모td 찾기
  const td = checkbox.parentElement;
  console.log(td);
  // .on Toggle
  // td.className = checkbox.checked ? "on" : "";
  td.classList.toggle("on");
  // if(checkbox.checked){
  //   // td.className = "on";
  //   td.classList.add("on");
  // }
  // else {
  //   // td.className = "";
  //   td.classList.remove("on");
  // }

}