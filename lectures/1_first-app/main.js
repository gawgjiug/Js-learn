console.log('안녕');
console.log('hello JS');
console.log('hello', 'world', '안녕');

// alert('hello JavaScript');

let str = '안녕하세요 저는';

console.log(str);

function sayHello() {
  console.log(`${str} 곽지욱입니다.`);
}
sayHello();

//객체

let obj = {
  number: 30,
  age: 24,
  sex: 'male',
};

console.log(`${obj.age}`);
console.log(obj);

/*브라우저 안에는 웹 문서를 해석할 수 있는 랜더링 엔진이 있음
브라우저로 html 파일을 열면 코드를 한 줄 한줄 해석하면서, 
해당 문서를 객체화 하여 js로 접근할 수 있게끔 한다.

문서를 객체화 했다고해서 문서 객체 모델 Document Object Model 이라고 함

이러한 DOM 은 Tree 구조를 가지고 있음.
head ,body, h1 , p ...
하나의 부모 태그와 n개의 자식 태그를 가질 수 있는 tree 구조 -> 이것을 DOM 트리 각각의 요소를 node 라고함

1 접근 2. 제어
노드에 접근 하는 방법은?

웹 문서를 객체화 한것 -> DOM
document 객체는 DOM트리의 최상위 노드임 이것을 통해 원하는 HTML 요소로 접근할 수 있는 것 
*/
