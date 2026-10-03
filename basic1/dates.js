// Dates

let mydates = new Date();
// console.log(mydates.toString());
console.log(typeof mydates);
// console.log(mydates.toDateString());
// console.log(mydates.toISOString());
// console.log(mydates.toJSON());
// console.log(mydates.toLocaleDateString());
// console.log(mydates.toLocaleTimeString());
// console.log(mydates.toLocaleString());
// console.log(mydates.toTimeString());
// console.log(mydates.toUTCString());

// let createdDate = new Date(2023, 0, 23)
let createdDate = new Date(2023, 0, 23, 5, 3, 4);
// console.log(createdDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createdDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}));

