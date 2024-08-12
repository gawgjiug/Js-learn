'use strict';

//객체 리터럴 문법
// const person = {
//   name: '짐코딩',
//   age: 25,
// };
// person.job = '개발자';
//**js 에서는 이미 생성한 객체에 동적으로 프로퍼티를 추가하는 것도 가능함 */

//객체 생성자 문법
// const person = new Object();
// person.name = '짐코딩';
// person.age = 40;

// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'health'],
//   hello: function () {
//     alert('Hello!');
//   },
//   greeting: function () {
//     alert('Hi!');
//   },
//   hobby: {
//     name: 'programing',
//     alert: function () {
//       alert('programing');
//     },
//   },
// };

// console.log(person.name[0]);
// console.log(person.hobby.name);
// person.hello();
// console.log(person.hobby.alert());
//객체 안에 존재하는 또다른 객체에도 접근이 가능함
// console.log(person);

//괄호 표기법
// console.log(person['name'][0]);
// console.log(person['name'][1]);
// person['hello']();

/*프로퍼티 제거
delete 연산자는 객체 프로퍼티를 제거한다 */

// const person = {};
// person.name = '짐코딩';
// person.age = 20;

// delete person.name;

// console.log(person);

// function printPerson(name, age, hobby) {
//   console.log(
//     `제 이름은 ${name}이며, 나이는 ${age}살 입니다.그리고 취미는 ${hobby} 입니다.`
//   );
// }
// printPerson('곽지욱', 10, '헬스');

// const person = {
//   name: '곽지욱',
//   age: 10,
//   hobby: '헬스',
// };

//함수의 파라미터로 객체를 전달할 수도 있음

// function printPerson(person) {
//   console.log(
//     `제 이름은 ${person.name}이며, 나이는 ${person.age}살 입니다.그리고 취미는 ${person.hobby} 입니다.`
//   );
// }
// printPerson(person);

/*
객체의 구조분해 할당 ----------*/
// const person = {
//   name: '짐코딩',
//   age: 10,
//   hobby: '헬스',
// };
// const { name, age, hobby } = person;

// console.log(name, age, hobby);

//팩토리 함수
// function createPerson(name, age, hobby) {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

// const person1 = createPerson('곽지욱', 10, '헬스');
// const person2 = createPerson('홍길동', 20, '헬스');
// const person3 = createPerson('김길동', 30, '헬스');
// const person4 = createPerson('고길동', 40, '헬스');
// const person5 = createPerson('한길동', 50, '헬스');
// const person6 = createPerson('최길동', 60, '헬스');

/*- ES6 단축 속성명
    
    객체에서 key와 value가 동일할 때는 Property shorthand(단축 속성명)을 사용할 수 있다. 단축 속성명은 객체를 정의 할 때 
    key값과 value값이 같으면 key와 value를 각각 표기하지 않고 한번만 표기하는 것을 말한다. */

//클래스를 사용한 객체생성
// class Person {
//   constructor(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//   }
// }

// const person7 = new Person('곽지욱', '25', '축구');

/*
call by value VS call by Reference*/

let username = '곽지욱';

changeName(username);
function changeName(name) {
  name = '홍길동';
  console.log(name);
}

console.log(username);
