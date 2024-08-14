//1. shift
//배열의 맨 앞에 있는 요소를 제거하고 반환

let arr = [1, 2, 3];
console.log(arr.shift(), arr);

//2. unshift
// 배열의 맨 앞에 새로운 요소를 추가

arr.unshift(400);
console.log(arr);

//shift나 unshift는 push pop보다는 느리게 동작한다.
//뒤에 있는 인덱스를 한칸씩 밀거나 배열 전체를 순회해야 하는 과정이 있기 때문.

// 3. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환하는 것

console.log('-----------slice-------------');

let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
console.log(arr2.slice(1, 3));
//1번부터 2번까지
console.log(arr2.slice(2));
//2번 인덱스 부터 끝까지
console.log(arr2.slice(-1));
//뒤에서 부터 짜른다 = "-" 이고 뒤에서 부터 하나만 자른거기 때문에 5가 출력됨
console.log(arr2.slice(-3));
//뒤에서 부터 3개 잘라라

// 4. concat
//두개의 서로다른 배열을 이어 붙여서 새로운 배열을 반환

console.log('----------concat----------');

let arr3 = [1, 2];
let arr4 = [3, 4];

console.log(arr3.concat(arr4));
