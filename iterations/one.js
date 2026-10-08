//for loop

// for (let i = 0; i < 10; i++) {
//   console.log(`Value of i is ${i}`);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(`Value of i is ${i}`);
//}

//console.log("Loop ended");

// for (let i = 0; i < 10; i++) {
//     if (i == 5){
//         console.log("Skipping 5");

//     }
//   console.log(`Value of i is ${i}`);
// }

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// let arr = ["bat", "ball", "wickets"];

// for (i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

//break and contine

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     console.log("Skipping 5");
//     break;
//   }
//   console.log(`Value of i is ${i}`);
// }

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("Skipping 5");
    continue;
  }
  console.log(`Value of i is ${i}`);
}
