/**
 * navigator 
 * - 브라우져(항해사) 정보 제공 객체
 */
const test1 = () => {
  console.log(navigator);
  console.log(navigator.userAgent);
};

/**
 * location
 * - 주소창과 관련된 기능 제공
 */
const test2 = () => {
  console.log(location);

  // 페이지이동
  // location.href = "https://naver.com";
  
  // 페이지 새로고침
  location.reload();
};

/**
 * history
 * - 방문기록 관련 기능제공
 * - 뒤로가기/앞으로가기/새로고침
 */
const test3 = () => {
  console.log(history);
};


/**
 * screen
 * - 브라우져가 실행중인 모니터에 대한 정보제공
 */
const test4 = () => {
  console.log(screen);
  // width 모니터 너비(px)
  // height 모니터 높이(px)
  // availWidth 가용 너비
  // availHeight 가용 높이
  // availLeft 가용오프셋(왼)
  // availTop 가용오프셋(위)

  const width = 500;
  const height = 300;
  const left = (screen.width - width) / 2 + screen.availLeft;
  const top = (screen.height - height) / 2 + screen.availTop;
  const popup = open("", "", `width=${width}, height=${height}, top=${top}, left=${left}`);

};