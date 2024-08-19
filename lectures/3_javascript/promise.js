// promise는 비동기 작업을 감싸는 객체임
// 비동기 작업 실행, 작업 상태관리, 결과저장, 병렬실행, 다시실행 등등

//promise의 3가지 상태
//대기pending, 성공Fulfilled, 실패Rejected
//대기는 아직 비동기 작업이 진행 중인 완료되지 않은 상태를 말함

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업
    //promise 객체가 생성됨과 동시에 안에있는 비동기 작업을 실행할 것.
    //executor 라고 부름

    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다');
      }
    }, 2000);
  });

  return promise;
}

//then 메서드는 promise의 비동기 작업이 성공했을 때만 호출 됨 결과값을 value로 받음

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//catch를 활용하면 reject를 받을 수 있음
//then과 catch를 연달아 사용하는 것을 promise 체이닝이라고 표현함

//반환된 promise 객체를 변수에 저장
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
