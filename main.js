let myName = "Concepter";
let myAge = 18;
const myBirthYear = 2008;
let isStudent = true;
let myFavColors = [ "baby blue", "cyan", "dark blue" ];
let today = new Date();

// typeof operator
console.log( "Name:", myName);    // Returns name Concepter
console.log( "Age:", myAge);     // currrent age 18
console.log("Student?:", isStudent);    // returns true
console.log("Favourite Colors:", myFavColors); // returns baby blue, cyan, dark blue
console.log("Today:", today); // the date today

function greet(name) {
    return `Hello ${name}!`
}
console.log(greet(myName)); // Hello Concepter!

// age now
let currentYear = today.getFullYear();
let ageNow = currentYear - myBirthYear;
console.log("Current Age:", ageNow); // Current Age: 18 (as of 2026)

// age in 100 years
let ageIn100Years = ageNow + 100;
console.log("Age in 100 years:", ageIn100Years); // Age in 100 years: 118

// year to turn 100
let yearToTurn100 = myBirthYear + 100;
console.log("Year to turn 100:", yearToTurn100); // Year to turn 100: 2108

//age in days
let ageInDays = ageNow * 365;
console.log("Age in days:", ageInDays); // Age in days: 6570 (not accounting for leap years)

// age in hours
let ageInHours = ageInDays * 24;
console.log("Age in hours:", ageInHours); // Age in hours: 157680 (not accounting for leap years)

// area of a rectangle
function calculateRectangleArea(height, width) {
    return height * width;
}
console.log("Area of rectangle (5x3):", calculateRectangleArea(5, 3)); // Area of rectangle (5x3): 15

// conversion of celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25)); // 77°F

// return true if number is even
function isEven(number) {
    return number % 2 === 0;
}
console.log("Is 4 even?", isEven(4)); // true
console.log("Is 7 even?", isEven(7)); // false

// return initials from name
function getInitials(name) {
    let names = name.split(" ");
    let initials = "";
    for (let i = 0; i < names.length; i++) {
        initials += names[i][0].toUpperCase();
    }
    return initials;
}
console.log("Initials of Concepter Bosibori:", getInitials("Concepter Bosibori")); // CB

// reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reversed 'Welcome Connie!':", reverseString("Welcome Connie!")); // !einnoC emocleW

// calculate tip bill
function calculateTip(bill, tipPercent) {
    return bill * (tipPercent / 100);
}
console.log("Tip for $50 bill with 15% tip:", calculateTip(50, 15)); // $7.50

// print numbers 1 to 100
function printNumbers() {
    for (let b = 1; b <= 100; b++) {
        console.log(b);
    }
}
printNumbers(); // prints numbers from 1 to 100 in the console

// print only even numbers 1 to 50
function printEvenNumbers() {
    for (let p = 1; p <= 50; p++) {
        if (isEven(p)) {
            console.log(p);
        }
    }
}
printEvenNumbers(); // prints even numbers from 1 to 50 in the console

// FizzBuzz (Daily Challenge Day 1)
for (let a = 1; a <= 100; a++) {
    if (a % 15 === 0) console.log("FizzBuzz");
    else if (a % 3 === 0) console.log("Fizz");
    else if (a % 5 === 0) console.log("Buzz");
    else console.log(a);
} // prints numbers from 1 to 100, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz"

// triangle of stars
function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}
printTriangle(6); // prints a triangle of stars with 6 rows in the console