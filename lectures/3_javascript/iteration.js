let arr = [1, 2, 3];

//1. 배열인덱스

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let arr2 = [4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]);
}

// 1-2. for of 반복문

for (const element of arr2) {
  console.log(element);
}
//for of 는 배열의 값을 순회

// 2. 객체 순회
let person = {
  name: ' 곽지욱',
  age: 25,
  hobby: '축구',
};

// 2.1 object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (const element of keys) {
  const value = person[element];
  console.log(element, value);
}

//2.2 object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);

//2.3 for in
for (let key in person) {
  console.log(key);
}

//for of는 배열에만 사용가능하고 for in은 객체에만 사용 가능함
