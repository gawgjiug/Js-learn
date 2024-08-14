//1 . Spread 연산자

function fucA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

let arr = [1, 2, 3, 4, 5];

fucA(...arr);

// 2. Rest 매개변수
// -> Rest 는 나머지 , 나머지 매개변수

function fucB(one, ...rest) {
  console.log(rest);
  console.log(one);

  rest.forEach((element, index) => {
    console.log(element, index);
  });
  //모든 매개변수를 다 받아와서 배열 형태로 저장
  //one 이후에 들어오는 모든 매개변수들은 전부 배열로 저장
  //rest 매개변수 뒤에는 추가적으로 매개변수를 받을 수 없음
}

fucB(1, ...arr, 10, 5, 50, 800);
