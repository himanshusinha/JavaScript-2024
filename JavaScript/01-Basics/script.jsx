// console.log(10+20+30);
// let js = "amazing";
// if(js==="amazing") 
//   console.log("JavaScript is FUN !!!")
//   console.log('Jonas');
//   console.log(11);

//   let firstName = "Bob";
//   console.log(firstName);
//   console.log(firstName);
//   console.log(firstName);

//   let first_name = 'himanshu';
//   let $firstname="sinha";
//   let _lastName= "sinha";

// let javaScriptIsFun = true;
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23)
// console.log(typeof 'hello')

// javaScriptIsFun = 'Yes'
// console.log(typeof javaScriptIsFun)
// console.log(typeof null)
// console.log(typeof undefined)

//let var const

// let age =30;
// age=31;

// // const birthYear = 1991;
// // birthYear=1990;

// var job = "programmer";
// job = "teacher";
// console.log(job)
// const now = 2037;
// const ageHimanshu = now-1990;
// const agePooja = now - 1993;
// console.log(ageHimanshu,agePooja)
 
// console.log(ageHimanshu*2,agePooja/2,2**3)

// const firstName = "Himanshu";
// const lastName = "Sinha";
// console.log(firstName+ " " +lastName);
// let x= 10+5; // 15
// console.log(x)
//  x+=5; //15+5 
//  x-=3;
//  ++x;
//  x--;
// console.log(x) //20
// console.log(ageHimanshu>agePooja);
// console.log(ageHimanshu>=18)


// Strings and literals
// let firstName = "Jonas";
// let job = "Teacher";
// let age = 2024-1990;
// const result = "I'm " + " " + firstName + " " + "my" + job + " " + "my age" + " " + " is " + age ;
// console.log(result);
// const newResult = `I'm ${firstName} my job is ${job} and my age ${age}`;
// console.log(newResult);

// console.log("String with \nmultiple \nlines");
// console.log(`String 
// multiple
// lines`)

// if else statement

// let age = 14;
 
// if(age>=18){
//   console.log("Sarah is eligible for driving license  🚗 ....")
// }
// else{
//   console.log("Sarah is too young ....")
// }


// let century ;
// const birthYear = 1990;
// if (birthYear<=2000){
// century=19;

// } else{
//  century=20;
// }
// console.log(`century is ${century}`)
//Type conversion 
// const inputYear = '1991';
// console.log( Number(inputYear)+18 )
// console.log(typeof String(23),23)

// //Type coersion
// console.log('23'-'10'+2)
// console.log('23'+'10'+2)
// console.log('23'*'2')
// console.log('23'/'2')

// let n =  '1'+1;
// n=n-1;
// console.log(n);
// console.log(2+3+4+'5');//95
// console.log('10'-'4'-'3'-2+'5');// 15

// Truthy and Falsy Valuees

// console.log(Boolean(0));
// console.log(Boolean(undefined))
// console.log(Boolean({}))
// console.log(Boolean('Jonas'))
// console.log(Boolean(null))

// let money=10;
// if(money)
// {
//   console.log("don't spend it all")
// }
// else{
//   console.log("you should do job for it")
// }

// let height=6;
// if(height){
//   console.log("height is defined")
// }
// else{
//   console.log("height is undefined")
// }

// Equality Operators

// const age = 18;
// if(age===18)
// console.log("you just became an adult (strict) equality .....")

// if(age==18)
// console.log("you just became an adult (loose) equality .....")

// const favourite = prompt("What's your favourite number ?");
// const newFavourite = Number(favourite);
//     // console.log(`${newFavourite} is your favourite number`)

// if(newFavourite ===23){
//   console.log("Cool 23 is amazing number")
// }
// else if(newFavourite===7){
//   console.log("7 is another amazing cool number")
// }
// else if(newFavourite===11){
//   console.log("11 is another amazing cool number")
// }
// else{
//   console.log("Number is not 23 , 7 or 11")
// }

// if(favourite!==23)console.log("Why not 23")

//Logical Operators AND OR and NOT

// const hasDrivingLicense = true;
// const hasVision = true  ;
// const isTired = true;

// console.log(hasDrivingLicense&&hasVision)  // false
// console.log(hasDrivingLicense||hasVision); // true
// console.log(!hasDrivingLicense)

// if(hasDrivingLicense&&hasVision&&!isTired){
//   console.log("Sarah is able to drive a car ....");
// }else{
//   console.log("Someone should drive a car ....")
// }

// console.log(hasDrivingLicense&&hasDrivingLicense&&isTired) // false

//Switch Statement

// const day = "sunday";

// switch(day){
//   case 'monday':
//     console.log("Day is monday");
//   case 'tuesday':
//     console.log("Day is tuesday");
//     break
//   case 'wednesday':
//     console.log("Day is wednesday");
//   case 'thursday':
//     console.log("Day is thursday");
//   case 'friday':
//     console.log("Day is friday");
//   case 'saturday':
//    console.log("Day is saturday");
//    break
//   case 'sunday':
//     console.log("Day is sunday");
//    break
//   default :
//     console.log("Not in these days .....")  
// }

// if(day==="monday"||day==="tuesday"){
//   console.log("day is monday")
// }else if(day==="wednesday"||day==="thursday"||day==="friday"||day==="saturday"){
//   console.log("day is wednesday or thursday or friday or saturday")
// }else if(day==="sunday"){
//   console.log("day is sunday")
// }

//Expression and Statement

// Expression example
// const age = 34;
// console.log(`my name is himanshu sinha and i want to become full stack developer in ${age}`)

// // Statement
// if(23>15){
//   console.log("23 is greater than 15")
// }

// Ternary Condition

const age = 23;
const result=age>=18?"You can drink bear 🍺 ....." : "You can drink water 💧....."
console.log(result)


let drink2;
if(age>=18){
  drink2="beer🍺"
}else{
  drink2="wate💧"
}
console.log(drink2)