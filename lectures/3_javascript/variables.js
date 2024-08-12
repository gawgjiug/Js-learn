'use strict';
// number = 2;
//선언도 안된 변수 사용 불가하게 됨

let A = '곽지욱 ';
console.log(A);
A = '곽길동';

const username = '김철수';
console.log(username);
// username = '홍길동';
// console.log(username);
// const는 값 변경 안됨.

//js에서의 스코프는 변수나 상수를 사용할 수 있는 영역을 말함

// 전역 스코프를 선언된 전역변수는 어떤 곳에서든 사용할 수 있으나.

/*{
  let a = '변수';
  //블록안에 사용된 변수는 블록 안에서만 사용할 수 있음
  {
    let c = 'c변수';
    console.log(a);
    //자식블록 안에서는 사용가능한 부모 블록 변수
  }
  console.log(c); //error
}
console.log(a); //error
*/

/*
var number = 2;
var number = 3;
console.log(number);
*/

//선언 여러번 가능 스코프의 영향을 받지 않는 것이 var임.

/*사용을 지양*/

/**
 * 호이스팅이 무엇인지?
 * 호이스팅은 코드가 실행되기 전 변수나 함수의 선언이 자바스크립트 파일의 최상단으로 끌어 올려지는 현상을 말함.
 */
console.log(sum(1, 2));

function sum(num1, num2) {
  return num1 + num2;
}
/**함수 선언 전에도 사용할 수 있음
 * 이것이 호이스팅
 * 브라우저에서 js 코드를 실행하기 전에 function 키워드로 정의 된 함수를 파일의 최상단으로 올려버리기 때문
 * var로 선언된 변수도 호이스팅이 발생함
 *
 * 파일 최상단에 'use strict' 를 선언하면
 * 엄격한 문법 규칙을 적용함
 */
