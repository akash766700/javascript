//for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
//   console.log(num);
}
const greetings = "Hello World";

for (const greet of greetings) {
//   console.log(greet);
}

// //maps

// const map = new Map();
// map.set("IN", "India");
// map.set("US", "United States");
// map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "GTA",
  game3: "Minecraft",
};

// for (const [key, value] of myObject) {
//     console.log(key, value);
// }

for (const key in myObject) {
  console.log(`${key} holds the value ${myObject[key]}`);
}