const mark = {
  name: 'Mark',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  name: 'John',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();
console.log(
  `Mark Miller's BMI (${markBMI}) is ${
    markBMI > johnBMI ? 'greater' : 'lower'
  } than John Smith's BMI (${johnBMI})`
);
