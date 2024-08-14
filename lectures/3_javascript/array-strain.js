//5가지 배열 변형 메서드
// 1. filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr = [
  { name: '곽지욱', hobby: '테니스' },
  { name: '홍길동', hobby: '테니스' },
  { name: '김길동', hobby: '독서' },
];

const tennisPeople = arr.filter((item) => {
  if (item.hobby === '테니스') return true;
});
console.log(tennisPeople);

// 2. map ******
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

console.log('map---------map');
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult);

//arr에서 name 프로퍼티 값들만 모아서 새로운 배열 생성
let names = arr.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전 순으로 정렬
console.log('sort------------sort');
let arr3 = ['b', 'd', 's', 'q'];
let arr4 = [10, 5, 3];
console.log(arr3.sort());
//숫자 값은 정상적으로 작동하지 않음 -> sort 메서드는 배열을 '사전' 순으로 정렬하기 때문에

const arrSort = arr4.sort((a, b) => {
  if (a > b) {
    //b가 a앞으로
    return 1;
  } else if (a < b) {
    //a가 b앞에 와라
    return -1;
  } else {
    //같은 값이면 두 값의 자리를 바꾸지마라
    return 0;
  }
});

console.log(arrSort);

//내림 차순??

const arrSort2 = arr4.sort((a, b) => {
  if (a < b) {
    //큰 값이 앞으로
    //b가 a앞으로
    return 1;
  } else if (a > b) {
    //a가 b보다 크면
    //a가 b앞에 와라
    return -1;
  } else {
    //같은 값이면 두 값의 자리를 바꾸지마라
    return 0;
  }
});

console.log(arrSort2);

// 4. toSorted
// sort는 원본 배열 자체를 정렬시키지만 toSorted는 원본은 냅두고 새로운 배열을 반환함

let arr5 = ['d', 's', 'a', 'q', 'b'];

const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

// 5. join

//배열의 모든 요소를 하나의 문자열로 합쳐서 반환

console.log('join------------join');
let arr6 = ['hi', 'im', 'jiug'];
let str = arr6.join(' ');
console.log(str);
