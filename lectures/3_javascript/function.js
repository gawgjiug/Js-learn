/**
 * 자바스크립에서 함수는 객체이다.
 * 객체는 변수에 담을 수 있기 때문에 함수를 변수에 담아 생성할 수 있다.
 *
 *
 */

//선언식 호이스팅 함수를 선언하기 전에도 사용할 수 있음
// function sayHello(name, age) {
//   console.log(`회원님의 이름은 ${name}이고 , 나이는 ${age}입니다.`);
// }

// const UserName = prompt('이름을 입력하세요');
// const UserAge = prompt('나이를 입력하세요');

// sayHello(UserName, UserAge);

//함수 표현식
const sayHi = () => {
  console.log('안녕하세요');
};
//함수 선언식은 호이스팅의 영향을 받지만, 표현식은 영향을 받지 않음

/**함수 스코프
 *
 */

//익명 함수 : 이름이 없는 함수 , 재활용 할 필요가 없다.

// let fruits = ['사과', '바나나', '딸기'];

// fruits.forEach(function (item, index) {
//   console.log(item, index);
// });

//즉시 실행함수 : 함수 선언뒤에 바로 ()를 사용하면서 선언 즉시 사용하는 함수

console.log('------------------');

(function () {
  console.log('즉시실행');
})();

//파라미터 기본 값 => ES6에서는 매개변수에 기본값을 지정하는 기능도 추가됐다

function sum(number1 = 0, number2 = 0) {
  const result = number1 + number2;
  console.log('결과 값', result);
}
sum(5);
//num2 는 할당하지 않았음에도 기본값이 있기에 출력

//Arrow Function
//function을 => 로 대체 가능함 , 파라미터가 하나인 경우에는 괄호 조차도 생략 가능함
//함수 바디에 명령문이 하나라면 중괄호와 return 도 생략 가능함
const hello = (name) => {
  console.log(`hello ${name}`);
};
hello('곽지욱');

//콜백함수란 다시 호출되는 함수를 말한다.
//**특별한 의미를 갖고있는 것이 아니고 다시 쓰인다는 의미론적인 이야기 */
//**addEventLitener 또한 'click'과 익명함수를 넘겨주면서 다시 호출해주는 것. forEach도 똑같음 */

//콜백함수 forEach
let fruits = ['사과', '바나나', '딸기'];

fruits.forEach(function (item, index) {
  console.log(item, index);
});
