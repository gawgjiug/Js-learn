fetch(url)
  .then((response) => {
    // 여기서 response는 fetch의 응답 객체
    if (!response.ok) {
      throw new Error('네트워크 응답이 올바르지 않습니다.');
    }
    // response.json()은 Promise를 반환, JSON 파싱이 완료되면 resolve
    return response.json();
  })
  .then((data) => {
    // 이 시점에서 data는 JSON 데이터가 됩니다.
    console.log(data); // JSON으로 파싱된 데이터를 처리
  })
  .catch((error) => {
    // 네트워크 오류나 throw된 오류가 이 블록에서 처리됩니다.
    console.error('Fetch 오류:', error);
  });
