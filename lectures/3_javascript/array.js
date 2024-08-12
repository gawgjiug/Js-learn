'use strict';

//1 배열 생성
/* 
const fruits = ['사과', '바나나', '딸기', '파인애플'];
console.log(fruits);

// const fruits = new Array('사과', '바나나', '딸기');
// console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//자주 사용하는 배열 API
//length
console.log(fruits.length);
console.log('마지막 값 : ', fruits[fruits.length - 1]);

//push

fruits.push('수박');
console.log(fruits);

//for each 는 배열 값을 순회하면서 하나 씩 넘겨주는
fruits.forEach(function (item, index) {
  console.log(item, index);
});

//값 제거 pop() 맨 뒤에서 제거
fruits.pop();
console.log(fruits);

//shift () 앞에서제거
fruits.shift();
console.log(fruits);

//앞에서 값 추가
fruits.unshift('앞에서 추가');
console.log(fruits);

//indexOf() 인덱스가져오기 값으로 검색
//없는 값을 검색하면 인덱스 -1을 반환함
console.log(fruits.indexOf('파인애플'));

//splice()
fruits.splice(1, 2);
//1번째 인덱스 부터 2개 제거
console.log(fruits);
*/

//구조 분해 할당
// let fruits = ['사과', '바나나', '딸기'];
// // let apple = fruits[0];
// //개별 변수에 담는 방식이 아니라 구조 분해 할당 문법을 이용
// let [apple, banana, strawberry, ...others] = [
//   '사과',
//   '바나나',
//   '딸기',
//   'a',
//   'b',
//   'c',
// ];
// //나머지는 할당이 안됨
// console.log(apple);
// console.log(banana);
// console.log(strawberry);
// console.log(others); //other 는 나머지를 배열로 담음

//4] Spread syntax (전개구문)
// let fruits = ['사과', '바나나', '딸기'];
// let items = [...fruits, '파인애플', '수박'];
// //items에 fruits 의 모든 값들을 펼쳐서 넣음

// console.log(items);
// //구조 분해 할당은 분해 해서 할당 하는 것이고 전개 구문은 쫙 펼친것 데이터를 더 추가할 수도 있음

// let names = ['홍길동', '김철수 ', '곽지욱'];
// let ages = [24, 25, 26, 26];

// let items2 = [...names, ...ages];
// //배열여러개도 가능
// console.log(items2);

//Rest parameters
// function print(value1, value2, value3) {
//   console.log(value1);
//   console.log(value2);
//   console.log(value3);
// }

// print('a', 'b', 'c');

// function print2(...values) {
//   values.forEach((element, index) => {
//     console.log(element, index);
//   });
//   //배열로 값을 받아서 출력
// }

// print2('a', 'b', 'c');

//6] 배열 복사 얇은 복사
/*
let source = ['홍길동', '김철수 ', '곽지욱'];
let target = source;
target[0] = '김길동';
//target 만 변경이 되는 것이 아니라 source 까지 같이 변경됨
//참조 값이 변경되어 버리기 때문 값이 아니라 주소를가지고 있는 것.
console.log(source);
console.log(target);
*/
//깊은 복사(deep copy)
let source = ['홍길동', '김철수 ', '곽지욱'];
// let target = [...source];
let target = Array.from(source);
// 두 가지 방법 모두 동일함 깊은 복사
//참조 값을 넣은게 아니라 데이터만 펼쳐준것
target[0] = '김길동';
console.log(source);
console.log(target);

//깊은 복사의 경우 새로운 메모리가 할당 되고 값이 그대로 복사되는 것!
//얇은 복사는 참조값을 가져오는 것!
