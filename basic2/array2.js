const marvel_hero = ["spiderman", "ironman", "hulk", "thor"];
const dc_hero = ["batman", "superman", "wonderwoman", "flash"];


// marvel_hero.push(dc_hero);
// console.log(marvel_hero);

// const all_hero = marvel_hero.concat(dc_hero);
// console.log(all_hero);



const all_hero = [...marvel_hero, ...dc_hero];
console.log(all_hero);


const arr1 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
console.log(arr1);

const flatArr = arr1.flat(Infinity);
console.log(flatArr);

console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));