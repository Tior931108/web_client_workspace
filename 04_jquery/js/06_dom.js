/**
 * 새로운 태그객체를 생성하기
 */
$(btn1).click(() => {
  const $area = $(area1);

  // const $h3 = $("<h3>Helloworld</h3>"); // memory상의 태그객체
  const $h3 = $("<h3></h3>");
  $h3.append("안녕");
  $area.html($h3);
});

let char = 66; // B

/**
 * 기존요소기준 삽입메소드
 * - append 마지막 자식요소로 추가
 * - prepend 첫번째 자식요소로 추가
 * - after 다음 형제요소로 추가
 * - before 이전 형제요소로 추가
 */
const $target = $(target);
$(btn2).click(() => $target.append($(`<span>${String.fromCharCode(char++)}</span>`)));
$(btn3).click(() => $target.prepend($(`<span>${String.fromCharCode(char++)}</span>`)));
$(btn4).click(() => $target.after($(`<span>${String.fromCharCode(char++)}</span>`)));
$(btn5).click(() => $target.before($(`<span>${String.fromCharCode(char++)}</span>`)));

/**
 * 새요소기준 삽입메소드
 * - appendTo 마지막 자식요소로 추가
 * - prependTo 첫번째 자식요소로 추가
 * - inserAfter 다음 형제요소로 추가
 * - inserBefore 이전 형제요소로 추가
 */
$(btn6).click(() => 
  $(`<span>${String.fromCharCode(char++)}</span>`)
    .appendTo($target)
    .css('color', 'hotpink'));
$(btn7).click(() => 
  $(`<span>${String.fromCharCode(char++)}</span>`)
    .prependTo($target)
    .css('color', 'hotpink'));
$(btn8).click(() => 
  $(`<span>${String.fromCharCode(char++)}</span>`)
    .insertAfter($target)
    .css('color', 'hotpink'));
$(btn9).click(() => 
  $(`<span>${String.fromCharCode(char++)}</span>`)
    .insertBefore($target)
    .css('color', 'hotpink'));


/**
 * 데이터의 순서대로 맨 첫줄부터 추가하세요. 
 * - 샌드위치 5500
 * - 바게뜨 4000
 * - 통밀빵 5000
 * 
 * json -> js object
 * product -> tr
 */
$(btn10).click(() => {
  const $tbody = $("table#tb-product tbody");
  const data = '[{"name":"통밀빵","price":5000},{"name":"바게뜨","price":4000},{"name":"샌드위치","price":5500}]';
  const _data = JSON.parse(data);
  console.log(data, _data);

  _data.forEach(({name, price}) => {
    console.log(name, price);
    // tr태그로 변환
    // const $tr = $("<tr></tr>");
    // const $td1 = $("<td></td>").text(name);
    // const $td2 = $("<td></td>").text(price);
    // $tr.append($td1, $td2);

    // tbody에 추가 
    // $tbody.prepend($tr);
    
    $("<tr></tr>")
      .append($("<td></td>").text(name))
      .append($("<td></td>").text(price))
      .prependTo($tbody);
  });

});

/**
 * 부모방향
 * - parent([selector]) : 직계부모
 * - parents([selector]) : 조상
 * - parentsUntil(selector) : 특정태그전까지 모든 조상
 */
const style = {
  color : 'red',
  border : '2px solid red'
};
$(btn11).click(() => {
  const $src = $("span");

  console.log(
    $src
      // .parent()
      // .parent("li")
      // .parents()
      // .parents("div")
      .parentsUntil("div")
      .css(style)
  );
});

/**
 * 자식방향
 * - children([selector]) 직계자식
 * - find(selector) 모든 후손
 */
$(btn12).click(() => {
  const $src = $('.wrap');

  console.log(
    $src
      // .children()
      // .children(":has(ul)")
      .find("span")
      .css(style)
  );
});

/**
 * 형제방향
 * - siblings([selector]) 이전/다음 모든 형제
 * 
 * - next() 다음 형제요소 하나
 * - nextAll([selector]) 다음 형제요소 모두
 * - nextUntil(selector) 특정태그 이전 형제요소
 * 
 * - prev() 이전 형제요소 하나
 * - prevAll([selector]) 이전 형제요소 모두
 * - prevUntil(selector) 특정태그 다음 형제요소
 */
$(btn13).click(() => {

  const $src = $(".container h2");

  console.log(
    $src
      // .siblings()
      // .siblings("p")
      // .next()
      // .nextAll()
      // .nextAll("h3, h4")
      // .nextUntil("p")
      .prev()
      // .prevAll()
      // .prevUntil("p")
      .css(style)
  );

});

/**
 * @실습문제 li2-2찾기
 * - .wrap부터 찾기
 * - span#fromMe부터 찾기
 * 
 */
$(btn14).click(() => {
  console.log(
    // $(".wrap")
    //   .children(":eq(2)")
    //   .find("li")
    //   .eq(3)
    //   .css(style)
    $("span#fromMe")
      .parent()
      .parent()
      .parent()
      .prev()
      .css(style)
  );
});