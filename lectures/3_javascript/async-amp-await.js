//async
/**어떤 함수를 비동기 함수로 만들어주는 키워드
 * 함수가 프로미스를 반환하도록 변환해주는 키워드
 * promise를 반환하지 않는 함수에 붙여서 자동으로 해당 함수를 비동기로 작동하도록 변환하는 키워드
 */

async function getData() {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      resove({
        name: '곽지욱',
        id: 'kwjo0228',
      });
    }, 1500);
  });
}
//async에 의해 객체를 그대로 반환하는 함수가 아니라

// console.log(getData());
//객체 반환

//await과 async가 함께 사용되어야 위력이 발휘됨

//async 함수 내부에서만 사용이 가능 한 키워드, 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  //getData가 반환하는 promise가 종료되기를 기다림
  console.log(data);
}

printData();
