/**
 * attr
 * - 인라인에 작성된 속성을 제어하는 메소드
 * 
 * - getter n개의 요소중에서 첫번째 요소의 속성값을 반환
 * - setter n개의 요소에 모두 해당 속성을 적용
 */

$(btn1).on('click', ()=>{
    const $img = $(".img-wrapper img");
    console.log($img); 

    // getter
    console.log($img.attr('src')); // ../sample/image/flower1.PNG

    // setter
    $img.attr('src', '../sample/image/flower3.PNG'); // 이미지 2개 모두 변경됌
});

/**
 * prop
 * - 자바스크립트 boolean으로 제어되는 속성
 * - checked, selected, disable
 */
$(btn2).on('click', ()=>{
    console.log($('[name=pizza]').prop('checked'));
    $('[name=pizza]').prop('checked', true); // n개의 요소 모두 적용
});

// [name=pizza] 전체 체크 또는 해제
// #checkAll -> input:checkbox[name=pizza]
$(":checkbox#checkAll").on('click',(e)=>{
    const {target} = e;
    $('[name=pizza]').prop('checked', target.checked);
});

// input:checkbox[name=pizza] -> #checkAll 
$('[name=pizza]').on('change', (e) => {
    const $pizza = $('[name=pizza]');
    // let checkedCnt = 0;
    // $pizza.each((index, pizza)=>{
    //     console.log(index, pizza);
    //     pizza.checked && checkedCnt++;
    // });

    const checkedCnt = $("[name=pizza]:checked").length;

    // 전체 체크 박스 제어
    $(checkAll).prop('checked', checkedCnt == $pizza.length);

    // if ($('[name=pizza]:checked').length !== $('[name=pizza]').length) {
    //     $(':checkbox#checkAll').prop('checked', false);
    // } else {
    //     $(':checkbox#checkAll').prop('checked', true);
    // }
});

