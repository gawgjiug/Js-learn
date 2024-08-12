let a = 30;
let b = '30';
console.log(a == b);
console.log(a === b);
//=== 3개는 엄격한 비교 데이터 타입까지 비교함
// == 동등 연산자는 자동 타입 변환이 되기 때문에 문자열을 숫자로 변환시킴
console.log(a !== b);
//엄격하게는 같지 않음
console.log(a != b);
//true
// 보통 ===을 많이 사용함
