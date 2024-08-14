//1. includes
//배열에 특정 요소가 있는지 확인하는
let arr = [1, 2, 3];

console.log(arr.includes(3));
//true
console.log(arr.includes(10));
//false

//2. indexOf
//특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드

console.log(arr.indexOf(1));
//0을 반환

//3. findIndex
//특정 요소의 위치를 반환하고, 모든 요소를 순회하면서 콜백함수를 만족하는 인덱스
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => item === 2);
//arr4를 순회하면서 가장 처음으로 2가 나오는 위치를 찾아서 인덱스를 반환함
console.log(findIndex);

//조건을 만족하는 것이 없으면 -1 반환

//indexOf 는 배열에 객체 타입의 값이 들어있을 경우 정확한 위치를 찾지 못할 수 있음

let objArr = [{ name: '이정환' }, { name: '홍길동' }];

console.log(objArr.indexOf({ name: '이정환' }));
//-1나옴 못찾음 -> indexOf는 얕은 비교로 비교하기 때문임
//객체에서는 참조값을 기준으로 비교가 되기 때문에 '값'으로는 비교할 수 없음

console.log('--------');

console.log(objArr.findIndex((item) => item.name === '이정환'));

//indexOf 특정 값을 찾을 때 얕은 비교로만 진행하기 때문에 객체 값은 찾지 못하지만
//findIndex는 콜백함수를 이용해서 특정 프로퍼티의 값으로 비교시킬 수가 있기 때문에 객체에서도 사용할 수 있다는 장점

//5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 요소를 그대로 반환함

console.log(objArr.find((item) => item.name === '홍길동'));
//인덱스가 아니라 객체 자체가 반환됨.
