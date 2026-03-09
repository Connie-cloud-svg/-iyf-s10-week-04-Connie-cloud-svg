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

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned

