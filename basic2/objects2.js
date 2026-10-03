const tinderUser = new Object();
tinderUser.name = "akash";
tinderUser.age = 21;
tinderUser.city = "pune";
tinderUser.isLoggedIn = true;

console.log(tinderUser);

const regularUser = {
  email: "[EMAIL_ADDRESS]",
  fullName: {
    userFullName: "Akash",
    userLastName: "Mali",
  },
};

console.log(regularUser.email);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userLastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const users = [
  {
    id: 1,
    name: "Akash",
    email: "[EMAIL_ADDRESS]",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Saturday"],
  },
  {
    id: 2,
    name: "Akash",
    email: "[EMAIL_ADDRESS]",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Saturday"],
  },
  {
    id: 3,
    name: "Akash",
    email: "[EMAIL_ADDRESS]",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Saturday"],
  },
];

users[1].email;
console.log(users[1].email);

console.log(users.includes(2));

console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));

const course = {
  name: "Full Stack Development",
  price: 999,
  courseInstructor: "Akash",
};
const { courseInstructor } = course;
console.log(courseInstructor);
console.log({ courseInstructor: Instructor });
console.log(course["price"]);

