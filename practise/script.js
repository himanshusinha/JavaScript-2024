// var x, y; //create a variable
// x = 6; //assign a value to variable
// y = 7;
// console.log('10.6'); //fixed values are called literals
// console.log('10'); //variable values are called variables
// const x1 = 5;
// const x2 = 6;
// let z = x1 + x2;
// console.log(z);
// const pi = 3.14;
// let person = 'John Doe';
// let answer = 'Yes i am';
// console.log(person + '' + answer, pi);

// let carName;
// console.log((carName = 'Volvo'));
// let personName = 'John';
// let carNamee = 'Volvo';
// let pricee = 14;
// console.log(personName, carNamee, pricee);

// var car = 'Volvo';

// let j = x + y + z;
// let k = console.log('5' + 2 + 3);
// console.log(k);

// let _lastName = 'Jonas';
// console.log(_lastName);

// {
//   let x = 2;
// }
// // x can NOT be used here
// console.log(x);
// {
//   var x = 2;
// }
// console.log(x);

// //cannot redeclared varible using let
// {
//   let x = 11;
//   x = 0;
// }

// //using var we can redeclared variables

// {
//   var x = 10;
//   x = 0;
// }

// // const PI = 3.141;
// // PI = 3.14;
// // console.log(PI);

// const cars = ['BMW', 'AUDI', 'VOLVO'];
// cars[0] = 'TOYOTA';
// console.log(cars);

// const car = { type: 'Fiat', model: '500', color: 'white' };
// car.color = 'red';
// car.owner = 'Johnson';

// console.log(car);
// let x = 5 + 5;
// let y = '5' + 5;
// let z = 'Hello' + 5;
// console.log('5' * 5);
// console.log(x, y, z);

// let x;
// x ??= 5;
// console.log(x);

// typeof ''; // Returns "string"
// typeof 'John'; // Returns "string"
// typeof 'John Doe'; // Returns "string"

// function myFunction(p1, p2) {
//   return p1 * p2;
// }
// let x = myFunction(10, 12);
// console.log(x);

// function toCelsius(fahrenhit) {
//   return (5 / 9) * (fahrenhit - 32);
// }

// let value = toCelsius();

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 35,
// };

// console.log(person.firstName, person.lastName, person.age);

// const person = {};

// person.age = 10;
// person.firstName = 'John';
// person.lastName = 'Doe';

// console.log(person);

// const person = new Object();

// person.firstName = 'john';
// person.lastName = 'doe';
// person.age = '34';

// console.log(person);
// console.log(person['lastName']);

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   id: 556,
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };
// console.log(person.fullName());

// const person = {
//   fistName: 'John',
//   lastName: 'Doe',
//   age: 50,
// };

// const x = person;
// x.age = 30;
// console.log(person.age);

// delete person.age;
// console.log(person.age);

// myObj = {
//   name: 'John',
//   age: 30,
//   myCars: {
//     car1: 'Ford',
//     car2: 'BMW',
//     car3: 'Fiat',
//   },
// };
// console.log(myObj.name); // Output: John
// console.log(myObj['age']); // Output: 30

// // Accessing nested properties
// console.log(myObj.myCars.car1); // Output: Ford
// console.log(myObj['myCars']['car2']); // Output: BMW

const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};
const myArray = Object.values(person);
console.log(myArray);

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

for (let [fruit, value] of Object.entries(fruits)) {
  console.log(`${fruit}: ${value}`);
}

console.log(fruits);
