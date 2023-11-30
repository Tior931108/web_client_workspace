$('#btn1').on('click', ()=>{
    console.log('🥩🥩🥩');

    console.log($); // jQuery 함수
    console.log(jQuery); // (위와 동일) $ 변수명 충돌을 방지하기 위해 jQuery변수도 제공

    // $('선택자') -> jQuery 객체(js태그객체를 감싼 객체)반환 
    // jQuery 객체를 담은 변수는 $로 시작하는 관례가 있다.
    const $p1 = $('#p1');
    console.log($p1); // jQuery.fn.init [p#p1.group1]
    $p1.css('color', 'red');

    // const $group1 = $('.group1');
    // console.log($group1);
    // $group1.css('text-decoration','underline');

    // javascript 
    const group1 = document.querySelectorAll('.group1').forEach((p)=> {
        p.style.textDecoration = 'underline';
    });

    // p태그에 font-size 2배 적용
    const $p = $('p');
    $p.css('font-size', '2em');

    // title속성이 있는 요소 background-color 적용
    const $title = $('[title]');
    $title.css('background-color', 'lightblue');

    // title 속성이 있는 안녕3인 요소 color 변경
    const $titleHello = $('[title="안녕3"]');
    $titleHello.css('color', 'blue');
});


/**
 * jQuery 객체
 * js 객체
 */
$('#btn2').on('click', ()=>{
    // jQuery 객체
    console.log($("p")); // p태그객체(js)를 감싼 객체

    // js 객체
    console.log($("p")[0]); // p#p1
    console.log($("p").get(0)); // p#p1
    console.log($("p").get()); // [p#p1, p#p2, p#p3, p#p4, p#p5]

    // js 객체를 전달해서 jquery 객체 생성
    console.log($(document.querySelector('#p1')));
    console.log($(p1));
    console.log($([p1, p2, p3]));
});


/**
 * jQuery 전용 선택자
 * - input 타입별로 Pseudo Class 선택자
 */
$('#btn3').on('click', ()=>{
    // input[type=text]
    $(":text")
        .css('background-color', 'tomato') // 원래 jQuery 객체를 다시리턴. 메소드 chaining
        .css('color', 'white'); // 연결해서 사용가능
    // 객체형으로도 전달가능 (css 속성명 주의! : (-)이 있다면 문자열처리 또는 카멜케이싱 지원)
    $(":password")
        .css({
            // 'background-color':'yellowgreen',
            backgroundColor:'yellowgreen',
            'color':'white'
        }); 

    $(":radio#male").prop("checked", true); // 체크처리

    // 야구, 농구 동시에 체크처리
    $(":checkbox#baseball, :checkbox#basketball").prop("checked", true);
    // $('#baseball, #basketball').prop("checked", true);

    $(":button").val('Click me!');
});

/**
 * 순서관련
 * - :first
 * - :last
 * - :odd
 * - :even
 * 
 * - : eq(n)
 * - : gt(n)
 * - : lt(n)
 * 
 * 내용포함 
 * - :containts(text)
 * 
 * 자식요소 포함 
 * - :has(selector)
 * 
 */
$(btn4).on('click', ()=>{
    // const $selected = $("#people tr:first"); // :first-chlid, :first-of-type
    // const $selected = $("#people tr:last"); // :last-chlid, :last-of-type
    // const $selected = $("#people tr:odd"); // 0-based index 홀수 :nth-child(2n + 1)
    // const $selected = $("#people tr:even"); // 0-based index 짝수 :nth-child(2n)

    // const $selected = $("#people tr:eq(3)"); // 
    // const $selected = $("#people tr:gt(0)"); 
    // const $selected = $("#people tr:lt(3)"); 


    // const $selected = $("#people tr:contains('A')"); // 텍스트기반
    const $selected = $("#people tr:has(a[href])"); // 텍스트기반
    

    $selected.css('background-color', 'slategray');
});