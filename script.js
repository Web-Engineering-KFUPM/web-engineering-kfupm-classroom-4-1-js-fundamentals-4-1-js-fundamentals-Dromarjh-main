console.log("%cJS Lab Connected — Start completing the TODOs!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-2: SYNTAX & VARIABLES
// ==========================

// Task 2.1 — declare & reassign

let course = "CIS101";       // declare and assign
console.log(course);         // display CIS101

course = "CIS102";           // reassign new value
console.log(course);         // display CIS102


// Task 2.2 — const safety

const SCHOOL = "MyCollege";  
console.log(SCHOOL);

// SCHOOL = "OtherCollege"; 


// ==========================
// TODO-3: ARITHMETIC & TYPES
// ==========================

// Task 3.1 — arithmetic basics
// Given let x = 8, y = 3; log x+y, x-y, x*y, x/y, x%y.

// Task 3.1 — arithmetic basics

let x = 8, y = 3;

console.log("x + y =", x + y);  // 11
console.log("x - y =", x - y);  // 5
console.log("x * y =", x * y);  // 24
console.log("x / y =", x / y);  // 2.666...
console.log("x % y =", x % y);  // 2


// Task 3.2 — number vs string
// Display results of "2" + 3, 2 + "3", and 2 + 3. Add a short comment: why do the first two concatenate?
console.log('"2" + 3 =', "2" + 3);   // "23"
console.log('2 + "3" =', 2 + "3");   // "23"
console.log("2 + 3 =", 2 + 3);       // 5


// Read chapter 4 in zyBooks: Compound Assignment Operators



// ==========================
// TODO-4: CONDITIONALS (CORE)
// ==========================

// Task 4.1 — else-if ladder
// Write a program that checks a user's age (take age input from user).
//       Use if–else if–else statements to categorize and log:
//         - "Child" if age < 13
//         - "Young" if age is between 13 and 35
//         - "Aged" if age > 35
let age = prompt("Enter your age:");  
age = Number(age);                    

if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age <= 35) {
  console.log("Young");
} else if (age > 35) {
  console.log("Aged");
} else {
  console.log("Invalid age input");
}

// Task 4.2 — Switch statement
// Create a variable let day = "Mon".
//       Use a switch statement to check the value of day.
//         - If it is "Mon", "Tue", "Wed", "Thu", or "Fri", log "weekday".
//         - If it is "Sat" or "Sun", log "weekend".
//         - For any other value, log "unknown".
let day = "Mon";

switch (day) {
  case "Mon":
  case "Tue":
  case "Wed":
  case "Thu":
  case "Fri":
    console.log("weekday");
    break;
  case "Sat":
  case "Sun":
    console.log("weekend");
    break;
  default:
    console.log("unknown");
}
// Read Chapter 4 in zyBooks: Conditional (ternary) operator

// ===============
// TODO-5: LOOPS
// ===============

// Task 5.1 — for loop sum
// TODO: Sum integers 1..10 with a for loop; display the result of total sum.
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i; // add i to sum
}

console.log("Total sum =", sum);  // 55

// Task 5.2 — while loop
// let t = 3; while(t > 0), decrement the value t variable in each iteration and display the result.
let t = 3;

while (t > 0) {
  console.log(t);
  t--; // decrement in each iteration
}

console.log("Loop finished");

// Read Chapter 4 in zyBooks: Do-While Loop
let count = 1;

do {
  console.log("Count =", count);
  count++;
} while (count <= 5);

console.log("Loop finished");

// =============================
// TODO-6: FUNCTIONS (DECL, RETURN, ARROW)
// =============================

// Task 6.1 — pure function + return
// Make a function add(a,b){ return a+b; } display the result of add(2,5).

function add(a, b) {
  return a + b;
}

console.log("add(2, 5) =", add(2, 5));  // 7


// Task 6.2 — Arrow functions
// Make an arrow function; const cube = n => n*n*n; cube(3)
const cube = n => n * n * n;

console.log("cube(3) =", cube(3)); 


// =================================
// TODO-7: SCOPE & GLOBAL OBJECT (ESSENTIALS)
// =================================

// Task 7.1 — var vs let scope
// Declare var a = 1; let b = 2 inside a block { },  then try displaying both outside the block; observe differences.

{
  var a = 1;   // function-scoped (or globally scoped if not inside a function)
  let b = 2;   // block-scoped
}

console.log("a =", a); // works → 1
console.log("b =", b); // ReferenceError: b is not defined

// ==================
// TODO-8: ARRAYS (CORE)
// ==================

// Task 8.1 — create & mutate
// TODO: let nums = [3,1,4]; then push(1), unshift(9), pop(); log final array and length.

let nums = [3, 1, 4];

nums.push(1);     
nums.unshift(9);   
nums.pop();        

console.log("Final array:", nums);       
console.log("Array length:", nums.length); 


// End of manual — great job! Keep this file open and work task by task.
