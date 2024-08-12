'use strict';

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//for...in
const person = {
  name: '홍길동',
  age: 25,
  job: '개발자',
};

// let key = prompt('어떤 값을 출력?');
// console.log(person[key]);

let keys = Object.keys(person);
// console.log(keys);

//Object의 key들을 반환해줌

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
  console.log(person[keys[i]]);
}
console.log('--------------------');

//객체의 key를 순서대로 key 변수에 할당
for (let key in person) {
  console.log(key);
  // console.log(person[key]);
}
console.log('--------------------');

let fruits = ['사과', '딸기', '수박', '귤'];

//of는 값을 하나씩 꺼내줌
for (let fruit of fruits) {
  console.log(fruit);
}
