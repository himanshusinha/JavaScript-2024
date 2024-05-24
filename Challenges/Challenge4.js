const bill = 275;
const tip = bill <= 300 && bill >= 50 ? 0.15 : 0.2;
console.log(
  `The bill was ${bill} the tip was ${tip} and totalvalue is ${bill + tip}`
);
