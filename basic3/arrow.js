const user = {
  username: "akash",
  price: 999,

  welcomeMessage: function () {
    // console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username= "daya"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//   let username = "akash";
//   console.log(this.username);
// }
// chai();

// const chai = () => {
//   let username = "akash";
//   console.log(this);
// };
// chai();

const addnum = (num1, num2) => {
  return num1 + num2;
};
console.log(addnum(1, 2));
