let myName = "Concepter";
let myAge = 18;
const myBirthYear = 2008;
let isStudent = true;
let myFavColors = ["baby blue", "cyan", "dark blue"];
let today = new Date();

// typeof operator
console.log("Name:", myName); // Returns name Concepter
console.log("Age:", myAge); // currrent age 18
console.log("Student?:", isStudent); // returns true
console.log("Favourite Colors:", myFavColors); // returns baby blue, cyan, dark blue
console.log("Today:", today); // the date today

function greet(name) {
  return `Hello ${name}!`;
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
  return (celsius * 9) / 5 + 32;
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
console.log(
  "Initials of Concepter Bosibori:",
  getInitials("Concepter Bosibori"),
); // CB

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

// print only even numbers from 1 to 50
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

// Interactive Calculator
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return num1 % num2;
    case "**":
      return num1 ** num2;
    default:
      return "Invalid operator";
  }
}

// Test
console.log(calculate(10, "+", 5)); // 15
console.log(calculate(10, "-", 5)); // 5
console.log(calculate(10, "*", 5)); // 50
console.log(calculate(10, "/", 5)); // 2
console.log(calculate(10, "/", 0)); // Error message

// creating arrays
const colours = ["red", "green", "blue"];
const numbers = [1, 2, 3, 4, 5];
const mixedArray = ["hello", 42, true, null];

// accesing elements
console.log(colours[0]); // red
console.log(numbers[2]); // 3
console.log(mixedArray[1]); // 42
console.log(colours.length); // 3
console.log(numbers.length); // 5
console.log(mixedArray.length); // 4

// modifying arrays
colours.push("yellow");
numbers.pop();
mixedArray.unshift("first");
console.log(colours);
console.log(numbers);
console.log(mixedArray);

// Array methods
const numberExample = [-3, -1, 1, 3, 4, 5, 7, 10, 12, 15];
// using map to double all numbers
const doubled = numberExample.map((num) => num * 2); 
// filtering out negative numbers
const positiveNumbers = numberExample.filter((num) => num > 0); // [1, 3, 4, 5, 7, 10, 12, 15]
// first number greater than 10
const greaterThanTen = numberExample.find((num) => num > 10); // 12
// product of all numbers
const product = numberExample.reduce((acc, num) => acc * num, 1); // -75600
console.log("Doubled:", doubled);
console.log("Positive Numbers:", positiveNumbers);
console.log("First Number Greater Than 10:", greaterThanTen);
console.log("Product of All Numbers:", product);

// array of objects with real data
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// Your tasks - use array methods:

// 1. Get all student names
const names = students.map((student) => student.name);

// 2. Get students with grade > 80
const highAchievers = students.filter((student) => student.grade > 80);

// 3. Find the student named "Charlie"
const charlie = students.find((student) => student.name === "Charlie");

// 4. Calculate average grade
const avgGrade = students.reduce((acc, student) => acc + student.grade, 0) / students.length;

// 5. Get CS majors only
const csMajors = students.filter((student) => student.major === "CS");

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some((student) => student.grade > 90);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every((student) => student.grade >= 60);


// Student Grade Tracker
const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name);
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const { grades } = student;
        const total = Object.values(grades).reduce((acc, grade) => acc + grade, 0);
        return total / Object.keys(grades).length;
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        const total = this.students.reduce((acc, student) => {
            return acc + (student.grades[subject] || 0);
        }, 0);
        return total / this.students.length;
    },
    
    // Get top performer
    getTopStudent() {
        let topStudent = null;
        let highestAverage = 0;
        this.students.forEach(student => {
            const avg = this.getStudentAverage(student.name);
            if (avg > highestAverage) {
                highestAverage = avg;
                topStudent = student.name;
            }
        });
        return topStudent;
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => this.getStudentAverage(student.name) < 70);
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const { grades } = student;
        let report = `Report Card for ${student.name}:\n`;
        Object.keys(grades).forEach(subject => {
            report += `${subject}: ${this.getLetterGrade(grades[subject])} (${grades[subject]})\n`;
        });
        report += `Average: ${this.getStudentAverage(student.name).toFixed(2)}`;
        return report;

    }
};

// Test your implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // Alice
console.log(gradeTracker.getStrugglingStudents());         // [Charlie]
console.log(gradeTracker.generateReportCard("Alice"));

