// 'use strict'

// let hasDriversLicense=false
// const passTest=true;
// if(passTest) hasDriversLicense=true;
// if(hasDriversLicense)console.log("I can drive :D")

// // const interface = "Audio"

// const private = 534;

//function
// function logger(){
//   console.log("My name is Himanshu Sinha")
// }
// // Calling / invoking /running a function
// logger();
// logger();
// logger();

// function fruitProcessor(apples,oranges){
//   console.log(apples,oranges)
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`
//   return juice
// }
// const fruitesJuice=fruitProcessor(3,5)
// console.log(fruitesJuice)

// const appleOrangesJuice = fruitProcessor(2,4);
// console.log(appleOrangesJuice)

// const num =(typeof  Number('23'));
// console.log(num)

// function mutliply( a ,  b){
//   return a*b;
// }
// const result = mutliply(2,3);
// console.log(result)

// //Function declaration
//  function calcAge1(birthYear){
//   return 2037-birthYear;
//  }
//  const age1 = calcAge1(1990)
//  //Runction expression or function with function name is called anonymous function
//  const calcAge2 = function(birthYear){
//   return 2037-birthYear;
//  }
//  const age2 = calcAge2(1991)
//  console.log(age1,age2)

//Arrow Function
// const calAge3 = birthYear=>2037-birthYear;
// const age3=calAge3(1990);
// console.log(age3)

// const yearsUntilRetirement= (birthYear,firstName)=>{
//   const age = 2037-birthYear;
//   const retirementAge = 65-age;
//   // return retirementAge;
//   return `${firstName},retired in ${retirementAge}`
// }
// const remainingAge = yearsUntilRetirement(1990,'Jonas')
// console.log(remainingAge)

//Function calling another function
// function cutPieces(fruits){
//   return fruits*3;
// }
// const fruitProcessor =function(apples,oranges){
//   const applesPieces = cutPieces(apples);
//   const orangesPieces = cutPieces(oranges);

//   const juice = `Juice with ${applesPieces} of apples and ${orangesPieces} of oranges`
//   return juice;
// }
// console.log(fruitProcessor(2,3))

/*
first of all fruitProcessor(2,3) is passed in function(apples,oranges)
these values then go to cutPieces(apples) // 2
same for the cutPiecesOranges // 3
now these cutPieces(apples) goes to cutPieces(fruits);
these will calculate and return from the function and goes to cutPieces(apples) and cutPieces(oranges) // 8 and 12 // 6 and 9
and then these values are assigned to applesPieces and orangesPieces 
and in last value is console in juce  = Juice with 8 pieces of apples and 12 pieces of oranges
and in last value is console in juce  = Juice with 6 pieces of apples and 9 pieces of oranges
*/

// // Another Example
// function mutliply(number){
//   return number*3
// }

// function addition(number){
//   return number+3;
// }
// function divison(number){
//   return number/2;
// }

// const calculateResult = function (number1,number2,number3){
//   const multiplyNumber1 = mutliply(number1);//6
//   const additionNumber2 = addition(number2);//7
//   const divisionNumber3 = divison(number3); // 5

//   const result= `Result of ${multiplyNumber1}  multiplyNumber1 and ${additionNumber2}  additionNumber2 and ${divisionNumber3} divisionNumber3`;
//   return result;
// }
//  console.log(calculateResult(2,4,10))

// Value of square and cube with the help of function
//  function square(number){
//   return number*number;
//  }
//  function cube(number){
//   return number*number*number;
//  }

//  const calculatedResult=function(number4,number5){
//   const squareValue = square(number4); // 3*2 //
//   const cubeValue = cube(number5); // 12 4*3

//   const valueResult = `Square of squareValue is ${squareValue}  and Cube of ${cubeValue} is cubeValue`;
//   return valueResult
//  }
//  console.log(calculatedResult(3,4))

//Review function

//Function Declaration
// function calcAge (birthYear){
//   return 2037-birthYear;
// }
//Function Expression
// const yearsUntilRetirement = function(birthYear,firstName){
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if(retirement>0)
//   {
//     console.log(`${firstName} retires in ${retirement}`)
//     return retirement;
//   }
//   else{
//     console.log(`${firstName} has already retired`
//     )
//     return-1;
//   }
//   // return `${firstName} retires in ${retirement}`
// }

// console.log(yearsUntilRetirement(1990,'Jonas'));
// console.log(yearsUntilRetirement(1950,'Mike'));

//Array

// const friends1 = "Michael";
// const friends2 = "Steven";
// const friends3 = "Peter";

// const friends = ["Michael","Steven","Peter"];
// console.log(friends);

// console.log(years)
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length)
// console.log(friends[friends.length-1])

// friends[2]="Mike";
// console.log(friends)

// const jonas=["Jonas","Schmedtmann",2037-1991,friends];
// console.log(jonas)

// Excercise
// const calcAge1 = function(birthYear){
//   return 2037-birthYear;
// }
// const years =[1990,1991,1992,1993];
// const age1 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);
// const age = [ calcAge1(years[0]),calcAge1(years[1]),calcAge1(years[years.length-1])];
// console.log(age)

//Arrays methods

// const friends = ["Michael","Steven","Peter"]
// // add elements from last position of array
// friends.push("Mike");
// console.log(friends);
// // remove elements from last position of array
// friends.pop("Mike");
// console.log(friends)
// //add elements from first position of array
// friends.unshift("John");
// console.log(friends)
// //remove elements from last position of array
// friends.shift();
// console.log(friends)
// // index of to get index of element from array
// console.log(friends.indexOf("Peter"))
// //includes

// console.log(friends.includes("Michael"))
// JsonObject
// const jsonArray=["Jonas","Schmedtmann",2024-1990];

// const jsonObject={
//   firstName:'Himanshu',
//   lastName:'Sinha',
//   email:'himanshusinha011@gmail.com',
//   age:2037-1990,
//   friends:["Michael","Mike","John"]
// };
// console.log(jsonObject);
// console.log(jsonObject['lastName']);
// console.log(jsonObject['email']);
// const nameKey= "Name";
// console.log(jsonObject['first'+nameKey])
// console.log(jsonObject['last'+nameKey])

// const interestedIn =prompt("What do you want to know about Jonas?Choose between firstName,lastName,email,age and friends");
// console.log(jsonObject[interestedIn])

// if(jsonObject[interestedIn]){
//   console.log(jsonObject[interestedIn])
// }
// else{
//   console.log("Wrong request !! Choose between firstName,lastName,email,age and friends")
// }

// jsonObject.location='indore';
// jsonObject['facebook']='@himanshusinha';
// console.log(jsonObject)

// //Challenge
// //Jonas has 3 friends and his best friends is called michael

// console.log(`${jsonObject.firstName} has ${jsonObject.friends} and his best friends is ${jsonObject.friends[0]}`)

// //Object Methods
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   hasDrivingLicense: true,
//   calcAge: function () {
//     if (!this.age) {
//       this.age = 2037 - this.birthYear;
//     }
//     return this.age;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());

// const getSummary = function () {
//   const data = `${this.firstName} is a ${this.age} year old teacher and he ${
//     this.hasDrivingLicense ? "has" : "doesn't have"
//   } a driving license`;
//   return data;
// };
// console.log(getSummary.call(jonas));

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetation ${i}🏋🏻‍♀️`);
}
