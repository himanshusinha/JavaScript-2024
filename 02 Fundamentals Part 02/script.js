'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense);
console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;

//functions
// function logger() {
//   console.log('My name is Jonas');
// }
// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(2, 4);
// console.log(orangeJuice);

// const num = Number('23');
// console.log(num);

// //Funciton declaration and function expressions

// //Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// //Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
  return fruit * 3;
}

function foodProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}
console.log(foodProcessor(2, 3));

const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge1(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} retires in ${retirement} years`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));


const friends1 = 'Michael';
const friends2 = 'Steven';
const friends3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years[0]);
console.log(years[1]);
console.log(years[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years1 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);

console.log(age1, age2);
// Storing ages in an array
const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[2])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(newLength);
console.log(friends);
friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

console.log(friends.shift()); // First
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
friends.push(23);

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jonas.firstName);
*/
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];
const types = [];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  types.push(typeof jonas[i]);
}
console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 1; i <= jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 1; i <= jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}
const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher'];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}
