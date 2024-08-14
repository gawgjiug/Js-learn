let date1 = new Date(); //생성자

console.log(date1);

let date2 = new Date('2000.03.23/10:10:10');
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시00분00초 로부터 몇 ms가 지났는지를 의미하는 숫자값"
//UTC

let ts1 = date1.getTime();
//타임 스탬프를 계산해서 반환해줌
console.log(ts1);

let date4 = new Date(ts1);
//해당 타임스탬프에 해당하는 시간.

console.log(date4);

// 3. 시간요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let day = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();

console.log(year, month, day, hour, minute);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);

//5. 시간을 여러 포맷으로 출력하기
//현재 날짜만

console.log(date1.toDateString());
//시분초를 제외하고 날짜만
console.log(date1.toLocaleString());
//현지화 된 형태로 날짜 출력
