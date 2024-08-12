let addbtn = document.querySelector('.addBtn');
let input = document.querySelector('input');
let addBefore = document.getElementById('before');
let removeTargetBtn = document.querySelector('#target-remove');
let removeBtn = document.querySelector('.remove-btn');

addbtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = input.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  button.classList.add('remove-btn');
  button.addEventListener('click', removeParentNode);
  li.appendChild(button);
  ul.appendChild(li);
  input.value = '';
  input.focus();
});

//앞에 삽입하기
addBefore.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');

  li.textContent = input.value;

  ul.insertBefore(li, targetLi);
  //타겟앞에 li 추가
});

//remove
removeBtn.addEventListener('click', removeParentNode);

function removeParentNode(event) {
  event.target.parentNode.remove();
}
