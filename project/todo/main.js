const $inputBox = document.querySelector('#input-box');
const $addBtn = document.querySelector('#add-btn');
const $todoList = document.querySelector('#todo-list');
const $todoCount = document.querySelector('#todo-count');
const $clearAllBtn = document.querySelector('#clear-all-btn');

// 로컬스토리지에서 저장된 Todo 리스트 복원
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach((todo) => {
    const $li = document.createElement('li');
    const $span = document.createElement('span');
    const $i = document.createElement('i');

    $i.classList.add('fas', 'fa-trash');
    $span.appendChild($i);
    $span.classList.add('icon');
    $span.addEventListener('click', deleteTask); // 클릭 시 삭제

    $li.textContent = todo.text;
    $li.appendChild($span);

    $todoList.appendChild($li);
  });
  $todoCount.textContent = todos.length;
  updateClearAllBtnState(); // 페이지 로드 시 버튼 상태 업데이트
}

// Todo 항목을 localStorage에 저장
function saveTodos() {
  const todos = Array.from($todoList.children).map((li) => ({
    text: li.firstChild.textContent.trim(),
  }));
  localStorage.setItem('todos', JSON.stringify(todos));
}

// 전체 삭제 버튼 상태 업데이트
function updateClearAllBtnState() {
  if ($todoList.children.length > 0) {
    $clearAllBtn.classList.add('active');
  } else {
    $clearAllBtn.classList.remove('active');
  }
}

// 입력 상자에서 키를 누를 때 버튼 상태 변경
$inputBox.addEventListener('keyup', function (e) {
  if (e.target.value) {
    $addBtn.classList.add('active');
  } else {
    $addBtn.classList.remove('active');
  }
});

// 버튼 클릭 시 할 일 추가
$addBtn.addEventListener('click', function () {
  if (!$inputBox.value) return; // 빈 값이면 무시

  const $li = document.createElement('li');
  const $span = document.createElement('span');
  const $i = document.createElement('i');

  $i.classList.add('fas', 'fa-trash');
  $span.appendChild($i);
  $span.addEventListener('click', deleteTask); // 클릭 시 삭제

  $span.classList.add('icon');
  $li.textContent = $inputBox.value;
  $li.appendChild($span);

  $todoList.appendChild($li);

  // 저장 및 카운트 업데이트
  saveTodos();
  $todoCount.textContent = $todoList.children.length;
  updateClearAllBtnState(); // 버튼 상태 업데이트

  // 입력 상자 비우기
  $inputBox.value = '';
  $addBtn.classList.remove('active');
});

// 삭제 작업 처리 함수
function deleteTask(e) {
  const $li = e.currentTarget.parentNode; // span의 부모는 li
  $li.remove(); // li 삭제

  // 저장 및 카운트 업데이트
  saveTodos();
  $todoCount.textContent = $todoList.children.length;
  updateClearAllBtnState(); // 버튼 상태 업데이트
}

// 전체 삭제 버튼 클릭 시 모든 할 일 삭제
$clearAllBtn.addEventListener('click', function () {
  $todoList.innerHTML = ''; // 모든 항목 삭제
  localStorage.removeItem('todos'); // localStorage에서 삭제

  // 할 일 개수 업데이트
  $todoCount.textContent = '0';
  updateClearAllBtnState(); // 버튼 상태 업데이트
});

// 페이지 로드 시 Todo 리스트 복원
document.addEventListener('DOMContentLoaded', loadTodos);
