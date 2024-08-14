// function returnFalse() {
//   console.log('false 함수');
//   return undefined;
// }

// function returnTrue() {
//   console.log('true 함수');
//   return 10;
// }

// console.log(returnFalse() && returnTrue());
//false가 먼저 평가 되기 때문에 false가 출력이 됨

//단락 평가는 논리연산식에서 첫번째 피연산자의 값 만으로도 연산의 결과를 확정할 수 있다면

//두 번째 피연산자는 접근하지 않는 실행방식을 말함

//첫 번째가 false이고 false and 무엇이 나오든 결과값은 false가 나오기 때문

//위치를 바꾸면 true와 false 함수가 모두 출력 됨
//true가 먼저 나오면 뒤에 false나 true 중 뭐가 나오는지에 따라 값이 달라지기 때문에

// console.log('--------------');

// console.log(returnTrue() || returnFalse());

//단락 평가 활용

function printName(person) {
  const name = person && person.name;
  console.log(name || 'person의 값이 없음');
  //person의 값이 undefined 일 경우 두번째 피연산자에 접근하지 않기에 name은 undefined로 정의되어있을 것
  //즉 첫번째 피연산자의 값이 false일 경우 두 번째 피연산자의 값에 접근을 하지만,
  // 첫 번째 부터 true라면 굳이 접근하지 않기에
}
//person 매개변수의 값이 undefined 이라면 단락평가에 의해 name을 호출하지 않음 접근 하지 않음

printName();
printName({ name: '곽지욱' });
let person;
