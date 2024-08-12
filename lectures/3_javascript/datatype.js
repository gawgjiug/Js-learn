'use strict';

let number = 2;
const number2 = 1.2;
console.log(number2);

console.log(5 / 0);
//정수를 0으로 나누면 infinity 숫자타입의 값
console.log(-5 / 0);
//음수를 0으로 나누면 -infinity

//js 는 아라비아 숫자 이외에도 값이 존재함
console.log('hello' / 0);
//숫자가 아닌 것을 나누려고하면 NaN = Not a number -> 이것도 숫자 타입의 값임
let nan = 'hello' / 0;
console.log(typeof nan); // => number 반환 데이터 타입을 확인하는 연산자 사용

//문자열

const hello = "안녕하세요\n제 이름은 '홍길동' 입니다";
console.log(hello);

/**
 * null 과 undefined는 둘다 값이 비어있는 상태
 * null은 값이 없는 상태
 * undefiend는 값을 할당하지 않은 상태를 말한다
 */

const username = null;
console.log(username);
let message2;
console.log(message2);
console.log(typeof username);
//object 타입이 나오는 것은 구현 버그임..

//const는 초기에 값을 무조건 할당 해야함

const person = {
  name: '홍길동',
  age: 25,

  say() {
    console.log(`저는 ${this.name} 입니다. 제 나이는 ${this.age} 세입니다`);
  },
};

person.say();

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr.push(99);
console.log(arr);
