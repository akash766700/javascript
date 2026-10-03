//primitive datatype

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 44.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");

const bigNumber = 3456543456543456543456789n;

// non-primitive (reference type) datatype
// array, object, function

const heros = ["shaktiman", "naagraj", "spiderman"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myName = "akash";
let anotherName = myName;
anotherName = "meena";

console.log(anotherName);
console.log(myName);

let userOne = {
  email: "akash6700@mail.com",
  upi: "akash6700@ybl",
};
let userTwo = userOne;

userTwo.email = "myemail@mail.com";

console.log(userOne);

console.log(userTwo);
