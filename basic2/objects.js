const mySymbol = Symbol("myKey");

const jsUser = {
  name: "akash",
  age: 21,
  city: "pune",
  email: "akash7666",
  [mySymbol]: "myKey",
  isLoggedIn: true,
  lastLoggedIn: ["Monday", "Saturday"],
};
console.log(jsUser.name);
console.log(jsUser.age);
console.log(jsUser.city);
console.log(jsUser.isLoggedIn);
console.log(jsUser["lastLoggedIn"]);
console.log(jsUser[mySymbol]);

jsUser.email = "akash.com";
console.log(jsUser);

Object.freeze(jsUser);
jsUser.email = "akash.com";
console.log(jsUser);

jsUser.greeting = function () {
  console.log(`Hello JS User, ${this.name}`);
};
jsUser.greeting();

jsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};
jsUser.greetingTwo();

jsUser.greetingThree = function () {
  console.log(`Hello JS User, ${this.name}`);
};
jsUser.greetingThree();
