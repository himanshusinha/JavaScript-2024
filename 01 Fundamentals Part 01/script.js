
/* console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);

let firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variables name convention
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
console.log(myCurrentJob);


let javaScriptIsFun = true;
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);

let age = 30;
age = 31;
console.log(age);

const birthYear = 1991;
birthYear = 1990;
console.log(birthYear);

var job = 'programmer';
job = 'teacher';
console.log(job); 

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = 15+10 x = 25
x *= 4; // x = 25*4 x=100
x++; // x = x+1 x = 101
x--; // x = 101-1 x = 100
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // > , < , >= , <=
console.log(ageJonas >= 18);

const isFullAge = ageJonas >= 18;
console.log(isFullAge);
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);
console.log(now - 1991, now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

//Opeators Precedence
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); 

let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
console.log(birthYear);

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
const birthYear = 1991;
const year = 2037;

const jonasNew =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + 'teacher!';
const newJonas = `I'm ${firstName}, a ${year - birthYear} years old teacher!`;
console.log(jonasNew);

console.log('String with \n');


const age = 15;
if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  console.log('Sarah is too young to drive .....');
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// type conversion
const inputYear = '1991';
console.log(typeof Number(inputYear), typeof inputYear);
console.log(inputYear + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // 11
n = n - 1; // 11-1
console.log(n); // 10

//truthy and falsy values
// there are 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


//Equality Operators
const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');
const favourite = Number(prompt("What's your favourite number?"));
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');

const hasDriversLicense = true; // A
const hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const hasDriversLicense = true; // A
const hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
const shouldDrive = hasDriversLicense && hasGoodVision;
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


const day = 'monday';
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

const day = 'monday';
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
  3 + 4
  1991
  true && false && !false

  if (23 > 10) {
  const str = '23 is bigger';
}
  const me = 'Jonas';
  console.log(`I'm ${2037 - 1991} years old ${me}`);


const age = 23;
age >= 18
  ? console.log('I like to drink wine 🍷')
  : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/
