const name = "googlupie";
const repoCount = 50;

//console.log(name + repoCount + "my repo");

console.log(`hey my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("akash");

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("a"));

const newStr = gameName.substring(1, 3);
console.log(newStr);

const anotherString = new String("hitesh");
const newAnotherString = anotherString.slice(2, 4);
console.log(newAnotherString);

// Trim whitespace and convert to title case
const cleanStr = messyStr
  .trim()
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(cleanStr);

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));
