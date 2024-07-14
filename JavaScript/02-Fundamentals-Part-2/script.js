// /* let js = "Amazing";
// console.log(10 + 20 + 30);
// console.log("Jonas");
// console.log(23);

// let firstName = "Matlida";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 20;
// let name = "Jonas";

// let person = "jonas";
// let PI = 3.141;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher"; */

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javaScriptIsFun = "YES!";
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(typeof year);

// year = 1990;
// console.log(typeof year);

// console.log(typeof null);

// let const and var

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// // const job;

// var job = "programmer";
// job = "teacher";

// lastName = "Schmedtmann";
// console.log(lastName);

// Operators
// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2**3 means 2 to the power of 3 = 2*2*2

// // Arithmetic operators
// let x = 10 + 5;
// x += 10; // x= x+10 , x = 25
// x *= 4; // x= x*4, x = 100
// x++; // x=x+1 , x = 101;
// x--; // x=x-1 , x=99
// console.log(x);

// //Comparison operators

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5; //10
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(averageAge);
 */

/* const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas =
  "I'm" +
  " " +
  firstName +
  " " +
  "a" +
  " " +
  (year - birthYear) +
  " " +
  " " +
  "old" +
  " " +
  job;
console.log(jonas);

const jonasNew = `I'm  ${firstName} . a ${year - birthYear} year old ${job}`;
console.log(jonasNew);

console.log(`Just a regular string ....`);

console.log(`String with 
multiple 
line`);
 */

// if else statement

/* const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young wait another ${yearsLeft} years`);
}
 */
/* 
const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
 */

/* // type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log(" I am " + 23 + " years old ");
console.log("23" + "10" - 3);
console.log("23" / "3");

let n = "1" + 1;
n = n - 1;
console.log(n); // n = 10
 */

// truthy or falsy values
//0 undefined '' NaN null
/* console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean({}));

const money = 20;

if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job");
}

let height = 0;

if (height) {
  console.log("heigt is defined");
} else {
  console.log("heigt is undefined");
}
 */

// Equality operator == vs ===
/* const age = "18";
if (age === 18) console.log("You just become an adult : D strict equality");

if (age == 18) console.log("You just become an adult : D loose equality");

const favourite = Number(prompt("What's your favourite number ?"));
// console.log(favourite);
// console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is favourite number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number not 23 or 7 or 9");
}
if (favourite !== 23) console.log("Why not 23 ?");
 */

// Logical Operators

/* const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // true && true  = true
console.log(hasDriversLicense || hasGoodVision); // true && false  = true
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive ...");
// } else {
//   console.log("Someone else should drive ...");
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive ...");
} else {
  console.log("Someone else should drive ...");
}
 */

//////////////////////////////////////////////////////////////////////////////

//Switch statement

/* const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
  // break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day !");
}
 */
// const day = "monday";
// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day !");
// }

//////////////////////////////////////////////////////////////////////////////

// Statement and Expressions

/* 3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}
const me = "Jonas";
console.log(`I'm ${2036 - 1991} years old ${me}`);
 */
/* 
const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍺")
//   : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`); */

//////////////////////////////////////////////////////////////////////////////

//Function

/* function logger() {
  console.log("My name is jonas");
}
logger(); // calling running invoking function

function fruitProcessor(apple, oranges) {
  console.log(apple, oranges);
  const juice = `Juice with ${apple} and ${oranges}`;
  return juice;
}
const appleJuice = fruitProcessor(3, 5);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5, 0);
console.log(appleOrangeJuice);

// Function declaration
const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};
const age1 = calcAge1(1990);

console.log(age1);
// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1990);

console.log(age1, age2);

// Arrow Function
let birthYear;
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = age - 65;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1990, "Bob"));
 */

//Function calling another function
/* function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  console.log(apples, oranges);
  return juice;
}
const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);
 */

//////////////////////////////////////////////////////////////////////////////

//Review Functions

/* const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName}is already retired`);
    return -1;
  }
  // retirement`${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));
 */
// Arrays
/* const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
const years = [1991, 1992, 1993, 1994];

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1990, friends];
console.log(jonas);
console.log(jonas.length); */
/* 
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1991, 1992, 1993, 1994];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1], calcAge(years[years.length - 1])),
];
console.log(ages);
 */

//////////////////////////////////////////////////////////////////////////////

//Arrays methods
/* 
const friends = ["michael", "steven", "peter"];
const newLength = friends.push("jay");
console.log(newLength);
console.log(friends);
console.log(friends.unshift("jonas"));
console.log(friends);
console.log(friends.pop());
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf("steven"));
console.log(friends.includes("michael"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
  console.log("You have a friend with name peter");
}
 */
//

//////////////////////////////////////////////////////////////////////////////

//Objects/*

/* const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1990,
  "teacher",
  ["Michael", "Stephen", "Peter"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  friends: ["Michael", "Steven", "Peter"],
};
const nameKey = "Name";
// console.log(jonas.lastName);
// console.log(jonas["age"]);
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

if (interestedIn) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
  jonas.location = "Portugal";
  jonas["twitter"] = "@jonasschemedtmann";
  console.log(jonas);
}

console.log(
  `${jonas.firstName} ${jonas.friends.length} friends,and his best friend is ${jonas.friends[0]}`
);
 */

//////////////////////////////////////////////////////////////////////////////

// Object Methods

/* 
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary() {
    return `${
      this.firstName
    } is a ${this.calcAge()} year old teacher and he has ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license`;
  },
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());
 */
// console.log(jonas["calcAge"](1991) );

//////////////////////////////////////////////////////////////////////////////

// for loop

/* for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitation ${rep}`);
}
 */

//////////////////////////////////////////////////////////////////////////////

//Looping array continue and break

/* 
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1990,
  "teacher",
  ["Michael", "Stephen", "Peter"],
  true,
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 1992, 1993, 1994];
const age = [];
for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}
console.log(age);

//Continue
for (let i = 0; i < years.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}
//Break
for (let i = 0; i < years.length; i++) {
  if (typeof jonas[i] === "number") continue;
  console.log(jonas[i], typeof jonas[i]);
}
 */

// Looping backward and Loops in Loops

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1990,
  "teacher",
  ["Michael", "Stephen", "Peter"],
  true,
];

/* for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------starting excercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${exercise} Lifting weight repetation ${rep} 🏋️‍♀️`);
  }
}
 */
// While Loop

let rep = 1;
while (rep <= 10) {
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end ....");
}
