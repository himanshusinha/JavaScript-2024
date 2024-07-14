const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.699,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

console.log(
  `Mark Miller's BMI (${markBMI}) is ${
    markBMI > johnBMI ? "greater" : "lower"
  } than John Smith's BMI (${johnBMI})`
);
