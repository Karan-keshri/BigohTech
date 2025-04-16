// What is Scope?
// Scope determines where variables, functions, and objects are accessible in your code.

// Think of it like this:
// A scope is a container or boundary where variables are visible and usable.

// When you declare a variable, it is created in a specific scope, and that scope determines where you can access that variable.

// 1. Global Scope
// Variables declared outside of any function or block have global scope.
// They are accessible from anywhere in the code, including inside functions and blocks.

let myName = "Karan"; // Global

function greet() {
  console.log(myName); // Accessible here
}
greet(); // Output: Karan

// 2. Function (Local) Scope
//Variables declared inside a function are only accessible within that function.

function test() {
    let x = 10;
    console.log(x); // ✅ 10
  }
  
  //console.log(x); //  ReferenceError: x is not defined

  //3. Block Scope
  // Variables declared with let and const are scoped inside {} blocks (like if, for, while, etc.)
  
  if (true) {
    let a = 5;
    const b = 10;
    var c = 15;
    console.log(a); // ✅ 5 (let is block scoped)
  }
  
  console.log(c); // ✅ 15 (var is function scoped)
  //console.log(a); //  ReferenceError (block scoped)
  //console.log(b); //  ReferenceError (block scoped)

  
  
  let a = 1; // Global

  function outer() {
    let b = 2; // Local to outer
  
    function inner() {
      let c = 3; // Local to inner
      console.log(a, b, c); // ✅ 1, 2, 3
    }
  
    inner();
    console.log(a, b);   // ✅ 1, 2
    //console.log(c);      // ❌ Error (c not visible here)
  }
  
  outer();
  