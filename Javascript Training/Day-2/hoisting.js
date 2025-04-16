/*
What is Hoisting in JavaScript?
Hoisting is a JavaScript mechanism where variables and function declarations are moved
 ("hoisted") to the top of their scope before code execution.

That means, we can use variables and functions before they are declared in the code,
 but with some important rules and limitations.

🔶 How does Hoisting Work?
JavaScript code is executed in two phases:

Memory Creation Phase (or Creation Phase)

All variables declared with var are hoisted and initialized with undefined.

All function declarations are hoisted and fully initialized.

let and const are hoisted too, but they are not initialized (they stay in a Temporal Dead Zone - TDZ).

Code Execution Phase

The code is executed line-by-line, using the memory set up in the first phase.
*/

// Example of Hoisting with var
console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10

// let and const are hoisted, but not initialized.

// They are in a Temporal Dead Zone (TDZ) from the start of the block until the line where they are declared.

// ✅ Once the variable is declared, it is available for use.

//console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 20;

//console.log(z); // ❌ ReferenceError
const z = 30;

// Function Hoisting

sayHello(); // Works
function sayHello() {
  console.log("Hello!");
}

//Function Expressions (with var)
//The variable greet is hoisted and initialized with undefined, not with the function.

//greet(); // ❌ TypeError: greet is not a function
var greet = function () {
  console.log("Hi!");
};
//greet(); // Works, but only after the declaration

//Function Expressions (with let or const)
//speak(); // ❌ ReferenceError    ReferenceError: Cannot access 'speak' before initialization
let speak = function () {
  console.log("Hey!");
};

