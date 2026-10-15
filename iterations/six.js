// const coding = ["js", "py", "rb", "html", "css", "js"];

// const values = coding.forEach(function (value) {
//   console.log(value);
//   return value
// });

// console.log(values);

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = mynums.filter((num) => {
//   return num < 4;
// });
// console.log(newNums);

// const newNums=[]
// mynums.forEach((num) => {
//   if(num>4){
//     newNums.push(num)
//   }
// })
// console.log(newNums);

let books = [
  {
    name: "Book1",
    genre: "Science",
    publish: 1992,
    edition: 2004,
  },
  {
    name: "Book2",
    genre: "Science",
    publish: 1992,
    edition: 2004,
  },
  {
    name: "Book3",
    genre: "Science",
    publish: 1992,
    edition: 2004,
  },
  {
    name: "Book4",
    genre: "Science",
    publish: 1992,
    edition: 2004,
  },
  {
    name: "Book5",
    genre: "Science",
    publish: 1992,
    edition: 2004,
  },
  {
    name: "Book6",
    genre: "Science",
    publish: 1992,
    edition: 2004,
  },
  {
    name: "Book7",
    genre: "Science",
    publish: 1992,
    edition: 2004,
  },
];

let newBooks = books.filter((book) => {
  return book.genre === "Science";
});
console.log(newBooks);

const newBooks1 = books.filter((book) => {
  return book.publish >= 1990 && book.genre === "Science";
});
console.log(newBooks1);
