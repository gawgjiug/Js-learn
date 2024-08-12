let inputBox = document.querySelector('#input-box');
let img = document.querySelector('img');

// inputBox.addEventListener('keypress', function (e) {
//   console.log('keypress');
// });

// inputBox.addEventListener('keydown', function (e) {
//   console.log('keydown');
// });

// 키보드 뗌
// inputBox.addEventListener('keyup', function (event) {
//   console.log('event key :', event.key);
//   console.log('event key :', event.keyCode);
//   // keyCode는 아스키 코드를 반환
// });

inputBox.addEventListener('focus', function (event) {
  console.log('focus');
});
inputBox.addEventListener('blur', function (event) {
  console.log('blur');
  //focus가 사라지면 발생
});
inputBox.addEventListener('change', function (event) {
  console.log('change');
  //value 값이 변경되면 사용됨.
});

img.addEventListener('error', function (event) {
  console.log('error');
  event.target.src = '../../img/apple.jpg';
});
