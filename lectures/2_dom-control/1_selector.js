let title = document.getElementById('title');
console.log(title);

title.textContent = '헬스 3대운동';

// title이라는 객체에 textContent 라는 속성 변경
// id 값은 중복되면 안되지만, class와 name은 중복이 가능하다.

let items = document.getElementsByClassName('item');

console.log(items);
console.log('스쿼트', items[0]);
console.log('벤치프레스', items[1]);
console.log('데드리프트', items[2]);

let liList = document.getElementsByTagName('li');
console.log(liList);

// DOM 요소 쿼리
let h2 = document.querySelector('#title');
console.log('h2 : ', h2);

let itemAll = document.querySelectorAll('.item');
console.log(itemAll);

h2.textContent = '<span>운동!!!</span>';
h2.innerHTML = '<span>운동@@@</span>';

// console.log(h2.textContent);

// document.querySelector('body').innerHTML = '<strong>운동</strong>';

//속성 제어하기

let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요');
input.setAttribute('required', '');
input.removeAttribute('placeholder');
//속성명 , 속성 값 입력

// HTML 요소 스타일링

const btn = document.querySelector('.addBtn');
// btn.style.color = 'white';
// btn.style.backgroundColor = 'black';

let helloItem = document.querySelector('.hello');
// helloItem.style.color = 'white';
// helloItem.style.backgroundColor = 'black';

helloItem.classList.add('dark');
//helloItem 클래스에 dark 추가
helloItem.classList.remove('dark');

//HTML 요소 생성 추가

let element = document.createElement('p');
