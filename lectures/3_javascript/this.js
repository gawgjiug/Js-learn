// let person = {
//   fullname: '짐코딩',
//   age: 20,
//   printThis: function () {
//     console.log(this);
//     console.log(this === person);
//     console.log(this === window);
//     //true
//   },
// };

// person.printThis();

// let printThis = person.printThis;

// printThis();

//window는 전역객체 this는 디폴트로 window 전역객체를 가짐

// function printThis() {
//   console.log(this); //default this =>window
// }
// printThis();

// let person1 = {
//   name: '홍길동',
//   printThis: printThis,
// };
// person1.printThis(); // =>this person1이 됨 this는 호출한놈

/* 대부분의 경우 this는 함수를 호출한 방법에 의해 결정된다.
person1에 의해 this가 호출되면 this는 person1이 되는 것*/

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
  console.log(this);
  console.log(this === btn);
  //this는 버튼요소를 가리킴
});

//bind - this를 설정할 수 있는 메서드
// function printThis() {
//   console.log(this); //default this =>window
// }
// let person1 = {
//   name: '홍길동',
// };
// let printThis1 = printThis.bind(person1);
// printThis1();
//bind 함수로 this에 person1을 바인딩함

// let person = {
//   name: '곽지욱',
//   age: 20,
//   hello: function () {
//     setTimeout(() => {
//       console.log(this.age);
//       console.log(this.name);
//     }, 1000);
//   },
// };

// person.hello();

// console.log(this);
//전역 스코프에서 this는 window 객체

/*
화살표 함수가 나오기 전까지는 함수는 어떻게 호출되는지에 따라 자신의 this 값을 정의했지만, 화살표 함수는 자신을 포함하고 있는 외부 Scope에서
this를 계승받는다*/
