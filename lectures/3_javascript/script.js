//dom 요소가 생성되기도 전에 스크립트 태그를 만났기 때문에 버튼을 가져올 수 없는 것

/*해결하는 방법 첫번째
body 최하단에서 script 로드
로드 관련 이벤트 window.onload */

// window.onload = function () {
//   let btn = document.querySelector('#btn');

//   btn.addEventListener('click', function () {
//     alert('hello !!!');
//   });
// }; 979ms

//dom 태그를 모두 파싱 한 후에 실행되는 이벤트
/*만약 이미지나 동영상의 개수가 많다? 그 해당 리소스를 모두 가져오는 것을 기다리고 코드가 실행됨 비효율적임 
그래서 DOMContentLoad를 많이씀
얘는 외부 컨텐츠 images,script,css,etc 등은 기다리지 않고 DOM 내부 컨텐츠만 기다림*/

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('#btn');

  btn.addEventListener('click', function () {
    alert('hello !!!');
  });
});
//821 ms

/*기본 적으로는 HTML 파싱을 하다가 스크립트 태그를 만나면 하던 동작을 멈추고,
스크립트 태그를 가져오고 바로 실행한다.
HTML 파싱이 완료되지 않은 상태에서 스크립트 태그를 실행할 때 에러가 발생할 수 있는 것 
body 태그 최하단에 넣으면 순서가 바뀜.
하지만 HTML 파싱을 할때 스크립트 파일을 다운받는 것이 더 효율적인데

그것이 defer와 async속성
defer는 HTML 파싱과 함께 비동기로 JS 파일을 불러온다.
그리고 HTML 파싱이 완료된 후에 JS 파일을 실행
js 파일을 불러오기 위해 파싱을 멈추는 것이 아니라 그대로 진행하는 것 
동시에 JS 파일을 가져오는 것 병렬적인 처리.
defer는 실행은 파싱이 모두 끝난후 


async는  defer와 마찬가지로 비동기로JS 파일을 불러오는 것 까지는 동일하지만 ,
실행은 가져오자마자 바로. 즉 HTML 파싱이 완료되지 않았더라도 먼저 로딩되는 JS 파일부터 실행이 시작되고,
JS 파일을 실행할 때는 HTML 파싱이 중단된다.*/
