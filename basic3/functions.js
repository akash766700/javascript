// function sayHello(){
//     console.log("A")
//     console.log("K")
//     console.log("A")
//     console.log("S")
//     console.log("H")

// }

// sayHello()

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumber(2, 3);

function addTwoNumber(number1, number2) {
  //   let result = number1 + number2;
  //   return result;

  return number1 + number2;
}
const result = addTwoNumber(2, 3);
//console.log(result);

function getUserName(username = "Akash") {
  // if(username === undefined){
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(getUserName("Akash"))

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 300, 600, 800));

const price = [100, 200, 300];

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(price));

const user = {
  username: "Akash",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

handleObject(user);
handleObject({
  username: "Kunal",
  price: 299,
});

const arr = [200, 400, 500, 300, 600, 800];
function calculateCartPrice(getArray) {
  return getArray;
}

console.log(calculateCartPrice(arr));
