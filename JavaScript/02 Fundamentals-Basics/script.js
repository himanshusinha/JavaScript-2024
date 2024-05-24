// Calculate scores
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// // Determine the winner
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }
// Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "John";

const friends = ["Michael", "Steven", "John"];
console.log(friends);

const y = new Array(1981, 1984, 2002, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// friends = ["Bob", "Alice"];
// console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtann", 2037 - 1990, "teacher", friends];
console.log(jonas.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge([0]);
const age2 = calcAge([1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = calcAge[years[0]] - calcAge(years[1]);
calcAge(years[years.length - 1]);

console.log(ages);
