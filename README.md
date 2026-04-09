# Week 4: JavaScript Fundamentals

## Author
- **Name:** Concepter Bosibori.
- **GitHub:** [@Connie-cloud-svg](https://github.com/Connie-cloud-svg)
- **Date:** March 19th, 2026.

## Project Description
This week marks the beginning of the JavaScript journey. The focus was on understanding core JS concepts — variables, data types, functions, control flow, arrays and objects — and how they power interactive websites. I built two mini-projects : an **interactive console calculator** and a **student grade tracker system**.

## Technologies Used
- HTML5
- JavaScript 

## Features
- Variable declarations using `let` and `const` with all core data types
- Arithmetic, string, comparison, and logical operators
- Function declarations, expressions, and arrow functions with default parameters
- Control flow: `if/else`, `switch` statements, `for`, `while`, and `for...of` loops
- FizzBuzz, triangle of stars, and other loop-based programs
- Array manipulation using `push`, `pop`, `shift`, `unshift`
- Array methods: `map`, `filter`, `find`, `reduce`, `some`, `every`, `includes`
- Object creation, property access (dot & bracket notation), and iteration
- Working with arrays of objects (sorting, filtering, finding)
- **Mini-Project 1:** Console calculator supporting `+`, `-`, `*`, `/`, `%`, `**` with division-by-zero handling
- **Mini-Project 2:** Student grade tracker with averages, report cards, top performer, and struggling student detection
- Daily challenges: FizzBuzz, reverse string, largest number, remove duplicates, palindrome checker

## How to Run
1. Clone this repository
     ```bash
   git clone https://github.com/Connie-cloud-svg/iyf-s10-week-04-Connie-cloud-svg.git
   ```
2. Open `index.html` in your browser
   OR
   Run `npm install` then `npm start`

## Lessons Learned
- The difference between `let` and `const` and when to use each
- How `===` (strict equality) differs from `==` (loose equality) and why strict is preferred
- How arrow functions differ from regular functions in syntax and readability
- How powerful array methods like `map`, `filter`, and `reduce` are compared to manual loops
- How objects can hold both data and behaviour (methods) in one structure

## Challenges Faced
- **Division by zero:** Handled inside the `divide()` function by checking `if (b === 0)` before dividing and returning a descriptive error message
- **Calculating averages in the grade tracker:** Used `Object.values()` combined with `reduce()` to dynamically sum grades regardless of how many subjects a student has
- **Palindrome checker with spaces and mixed case:** Solved by chaining `.toLowerCase()` and `.replace()` with a regex to strip spaces, then comparing the string to its reversed version
