/* console.log("Jonas");
console.log(23);
let firstName = "Matlida"; // declaring a variable
let first_name = "jonas";
// let 3years = 3;
//let jonas&matilda = 'JM';
// let new = 27;
// let _function = 24; // let $function = 24; // these are allowed in js
// let Person = 'jonas';
// let PI = 3.14141;
// let myFirstJob ='Programmer';
// let myCurrentJob ='Teacher';
// let job1 = "programmer";
// let job2 = "teacher";
console.log(firstName);
console.log(firstName);
console.log(firstName); */

/* let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");
javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

let firstName;
console.log(typeof firstName);

firstName = "Jonas";
console.log(typeof firstName);
console.log(typeof null);
  */

/* let age = 31;
age = 32;
console.log(age); */

/* const birthYear = 1991;
birthYear = 1990;
console.log(birthYear);
 */

// const job;
// console.log(job);
/* 
var age = 20;
age = 21;

console.log(age); */
// const now = 2037;
// const ageJonas = now - 1990;
// const ageSarah = now - 1991;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";

// console.log(firstName + " " + lastName);
// let x = 10 + 5;
// x += 5;
// x *= 4;
// x++;
// x--;
// console.log(x);

// console.log(ageJonas >= ageSarah);
// const isFullAge = ageSarah >= 18;

// Operators precedences

// const now = 2037;
// const ageJonas = now - 1990;
// const ageSarah = now - 1991;

// console.log(now - 1990 > now - 1991);

// let x, y;
// x = y = 25 - 15 - 5;
// console.log(x, y);

// const averageAge = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Template Literals
// const firstName = "Jonas";
// const age = 2024 - 1991;
// const job = "Teacher";

// console.log(
//   " I'm " +
//     " " +
//     firstName +
//     " " +
//     " I'm " +
//     " " +
//     age +
//     " year's old " +
//     " " +
//     job
// );

// console.log(`I'm ${firstName} , I'm ${age} year's old , ${job} `);
// console.log("String's with \n multiple \n lines");
// console.log(`String with
// multiple lines`);

// If else
// let age = 15;
// if (age >= 18) {
//   console.log("You're eligible for vote ...");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `You're not eligible for vote  wait another ${yearsLeft} year's...`
//   );
// }
// let century = "";
// const birthYear = 18;
// if (birthYear <= 20) {
//   let century = 20;
// } else {
//   let century = 21;
// }
// console.log(century);

// type converstion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number("JavaScript"));
// console.log(String(23), 23);

// //type coersion
// console.log("Im" + 23 + "years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("23" * 2);
// console.log("23" / 2);

// let n = "1" + 1;
// n = n - 1;
// console.log(n); // 10
// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + 5);

// Truthy and falsy value
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 10;
// if (money) {
//   console.log("You dont spend at all :) ");
// } else {
//   console.log("You should get a job");
// }

// let height;
// if (height) {
//   console.log("height is defined");
// } else {
//   console.log("height is undefined");
// }

// let age = "18";

// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// let favourite = prompt("What's your favourite number");
// favourite = Number(favourite);

// console.log(favourite);

// if (favourite === 23) {
//   console.log("23 is your favourite number");
// } else if (favourite === 7) {
//   console.log("7 is your favourite number");
// } else if (favourite === 9) {
//   console.log("9 is your favourite number");
// } else {
//   console.log("Number is not 23, 7, or 9");
// }
// if (favourite !== 23) console.log("Why not 23 ?");

// const hasDrivingLicense = true;
// const hasGoodVision = true;

// console.log(hasDrivingLicense && hasGoodVision);
// console.log(hasDrivingLicense || hasGoodVision);
// console.log(!hasDrivingLicense);

// const shouldDrive = hasDrivingLicense && hasGoodVision;
// console.log(shouldDrive);

// if (shouldDrive) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }
// const isTired = true;
// console.log(hasDrivingLicense && hasGoodVision && isTired);

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

//Switch Statement
// const day = "tuesday";
// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Plan course structure");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
// break;
//   case "friday":
//     console.log("Record videos");
//break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day");
// }
// const day = "tuesday";

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Plan course structure");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day");
// }

// Ternary

const age = 23;
age >= 18;
// ? console.log("I like to drink wine 🍺")
// : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍺" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍺";
} else {
  drink2 = "water 💧";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18}?"wine 🍺": "water 💧"`);
