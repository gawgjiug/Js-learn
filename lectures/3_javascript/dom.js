// function onClick() {
//   const $ul = document.querySelector('.ul');
//   for (let i = 0; i < 3000; i++) {
//     $ul.innerHTML += `<li>${i}</li>`;
//   }
// }

//해당 코드는 3,000번 DOM을 수정함
/**
 * DOM -> Render Tree -> Layout -> Painting 이 단계로 랜더링이 이루어지는데,
 * DOM을 계속해서 수정하면 성능이 저하됨 실험결과 15초 정도 걸림
 * DOM 수정횟수를 최소화 해야함
 */

function onClick() {
  const $ul = document.querySelector('ul');
  let list = '';
  for (let i = 0; i < 3000; i++) {
    list += `<li>${i}</li>`;
  }
  $ul.innerHTML = list;
}

// DOM을 딱 한번만 수정하도록 변경
// 약(22배 개선)
