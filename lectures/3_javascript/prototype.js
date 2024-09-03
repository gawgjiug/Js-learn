function parents() {
  this.a = 'A';
  this.b = 'B';
}

const child = new parents();

console.log(child.__proto__);
