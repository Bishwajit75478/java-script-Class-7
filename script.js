// // Javascript object

// // Array Example
// const userArray = ["bishwajit", "hazra", 2002, "one"];
// console.log(userArray);
// console.log(userArray[0]);

// // object Example
// const userObject = {
//   firstName: "bishwajit",
//   lastName: "hazra",
//   birthYear: 2002,
//   clssName: "one",
// };
// console.log(userObject);
// console.log(userObject["firstName"]);
// console.log(userObject.lastName);
// console.log(userObject.birthYear);

// // add new item
// //Example one
// userObject.hobby = "drowing";
// console.log(userObject);
// console.log(userObject.hobby);

// //Example two
// userObject["birthplace"] = "khulna";
// console.log(userObject["birthplace"]);

// //
// //Another Object Example
// const userObjectTwo = {
//   firstName: "bishwajit",
//   lestName: "hazra",
//   isjob: true,
//   calculatAge: function (birthyear) {
//     return 2023 - birthyear;
//   },
// };
// console.log(userObjectTwo.isjob);
// console.log(userObjectTwo.calculatAge(2002));
// console.log(userObjectTwo["calculatAge"](2000));

// //
// // This keword
// const userObjectTwo = {
//   firstName: "bishwajit",
//   lestName: "hazra",
//   birthyear: 2002,
//   isjob: true,
//   calculatAge: function () {
//     console.log(this.birthyear);
//     return 2023 - this.birthyear;
//   },
//   userdetails: function () {
//     return `this is user ${this.firstName},${this.lestName},${this.birthyear} }`;
//   },
// };
// console.log(userObjectTwo.calculatAge());
// console.log(userObjectTwo.userdetails());

// //
// //javascript loop
// //for loopt
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// for (let Task = 1; Task <= 100; Task++) {
//   console.log(`Task ${Task}`);
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(`Task ${i}`);
// }

// //
// //While loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");

// let i = 1;
// while (i <= 5);{
//   console.log(`Task ${i}`);
//   i++;
// }

// //
// //Array
// const newArray = [
//   "date 1",
//   "date 2",
//   "date 3",
//   "date 4",
//   "date 5",
//   "date 6",
//   "date 7",
//   "date 8",
//   "date 9",
// ];

// console.log(newArray);
// console.log(newArray[0]);
// console.log(newArray[1]);
// console.log(newArray[2]);

// for (let i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }

// look break
// for (let i = newArray.length - 1; i >= 0; i--) {
//   if (i == 3) break;
//   console.log(newArray[i]);
// }

// //
// //loop contiune
// for (let i = newArray.length - 1; i >= 0; i--) {
//   if (i == 4) continue;
//   console.log(newArray[i]);
// }

// //Array
const newArray = [
  "date 1",
  "date 2",
  "date 3",
  "date 4",
  "date 5",
  "date 6",
  "date 7",
  "date 8",
];
console.log(newArray);

//Indexof
console.log(newArray.indexOf("date 3"));
console.log(newArray.indexOf("date 7"));

// includes
console.log(newArray.includes("date 9"));
