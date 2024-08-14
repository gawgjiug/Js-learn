// 어떤 값이 참이나 거짓을 의미하는 값이 아닌데도 조건 문 내에서 true false 를 반환하는것을
// truthy와 falsy 라고함 js 내에 모든 값들은 truthy 하거나 falsy함

// if (123) {
//   console.log('123 is true'); //truthy
// } else {
//   console.log('123 is false');
// }

//falsy 한 값

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = '';
let f7 = 0n; //big Integer

if (!f1) {
  console.log('falsy');
}

// 2. truthy
// -> 7가지 Falsy 한 값들을 제외한 나머지 모든 값은 truthy임

let t1 = 'hello'; //비어있지 않은 문자나
let t2 = 123; //0이 아닌 숫자나
let t3 = []; //배열이나
let t4 = {}; //객체

let t5 = () => {}; //화살표 함수 모두 truthy

if (t5) {
  console.log('true');
}

//3. 활용

function printName(person) {
  if (!person) {
    console.log('person의 값이 없습니다');
    return;
  }
  console.log(person.name);
}

let person = null;

printName(person);

//매개변수로 객체를 받지 못하고 undefiend 값을 받는 경우가 많기 때문에 null 혹은 undefiend 값이 아닌지 조건문으로 확인이 필요함
//person에 undefined나 null이 들어왔을 경우 falsy로 평가받기 때문에 조건문을 !person 으로 효율적으로 적어줄 수 있음.
