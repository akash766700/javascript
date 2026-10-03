const score = 400;
const balance = new Number(100);

console.log(score);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
console.log(balance.toPrecision(2));
const hundreds = 1000000000;
console.log(hundreds.toLocaleString());
const other = Number(234.44544);
console.log(other.toFixed(2));
console.log(other.toPrecision(2));

const num = 123332454565676745443.3434343434344553324534;
console.log(num.toPrecision(15));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

const rand = Math.random();
console.log(rand); // 0 to 1

const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

//console.log(Math.PI);
//console.log(Math.E);
//console.log(Math.round(4.5));
//console.log(Math.ceil(4.5));
//console.log(Math.floor(4.5));
//console.log(Math.trunc(4.5));
//console.log(Math.abs(-4.5));
//console.log(Math.pow(2, 3));
//console.log(Math.sqrt(4));
//console.log(Math.cbrt(8));
//console.log(Math.min(1, 2, 3, 4, 5));
//console.log(Math.max(1, 2, 3, 4, 5));

//console.log(Math.random());
//console.log(Math.floor(Math.random() * 10));
//console.log(Math.ceil(Math.random() * 10));
//console.log(Math.round(Math.random() * 10));
//console.log(Math.trunc(Math.random() * 10));
console.log(Math.fround(Math.random() * 10));

console.log(Math.floor(Math.random() * (min - max + 1)) + min);