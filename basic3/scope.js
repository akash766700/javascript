// let a = 10;
// var b = 20;
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
  const a = 10;
  let b = 20;
  var c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

function test() {
  let a = 10;
  var b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);

function one() {
  const username = "kunal";
  function two() {
    const password = "123";
    console.log(username);
    console.log(password);
  }
  two();
}
one();
