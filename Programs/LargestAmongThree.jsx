let num1 = 42;    // First number
let num2 = 78;    // Second number
let num3 = 55;    // Third number

let largest;      // To hold the largest number

// Using conditional statements to compare the numbers and determine the largest
if (num1 > num2 && num1 > num3) {
    largest = num1;
} else if (num2 > num1 && num2 > num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log("The largest number among " + num1 + ", " + num2 + ", and " + num3 + " is: " + largest + ".");