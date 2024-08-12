let rectangle = document.querySelector('#rectangle');
let radius = document.querySelector('.circle');
let body = document.querySelector('.body');

rectangle.addEventListener('mousedown', function (event) {
  // console.log('mousedown');
  console.log('client X:', event.clientX, 'clinet Y : ', event.clientY);
  console.log('page X:', event.pageX, 'page Y : ', event.pageY);
});

body.addEventListener('mousedown', function (e) {
  let left = e.clientX;
  let top = e.clientY;

  // Set CSS styles directly
  radius.style.position = 'absolute'; // Ensure the circle is positioned absolutely
  radius.style.left = `${left - 25}px`;
  radius.style.top = `${top - 25}px`;
});

//클라이언트는 브라우저 기준
//페이지는 웹 문서 전체 기준

rectangle.addEventListener('mouseup', function () {
  console.log('mouseup');
});

// rectangle.addEventListener('mouseenter', function () {
//   console.log('mouseenter');
// });

// rectangle.addEventListener('mouseleave', function () {
//   console.log('mouseleave');
// });

// rectangle.addEventListener('mousemove', function () {
//   console.log('mousemove');
// });
