let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

// console.log(btn1);
// console.log(btn2);

btn1.onclick = function () {
  alert('hello 프로퍼티 리스너');
};

btn2.addEventListener('click', helloEvent1);

function helloEvent1() {
  alert('addeventLitener');
}
//add는 2개의 핸들러 함수를 등록할 수 있음
btn2.addEventListener('click', helloEvent2);

function helloEvent2() {
  alert('addEventLitener2');
}

//이벤트 제거

btn2.removeEventListener('click', helloEvent1);

//what is event 객체?
/* event 객체는 발생한 이벤트에 관련된 다양한 속성과 메서드를 갖고있다.
파라미터 명은 개발자가 짓기 나름. */
