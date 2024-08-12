let h2 = document.querySelector('h2');
h2.dataset.tooltip = '안녕하세요';
console.log('h2.dataset.tooltip : ', h2.dataset.tooltip);

let liList = document.querySelectorAll('li');
let img = document.querySelector('img');
let selectedItem = document.querySelector('.selected-item');

liList[0].addEventListener('click', selectItem);
liList[1].addEventListener('click', selectItem);
liList[2].addEventListener('click', selectItem);

function selectItem(event) {
  selectedItem.textContent = `${event.target.textContent} 를 선택하셨습니다`;
  img.setAttribute('src', event.target.dataset.img);
}

//data set 이용
