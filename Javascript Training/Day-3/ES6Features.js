/*
let and const were introduced to fix the scoping issues of var. 
const prevents reassignment and is good for constants.
 Arrow functions simplify syntax and capture this from the parent scope
  — great for callbacks and functional programming.

✅ What changed in ES6?
Before ES6, JavaScript had only one keyword for variables: var. It was function scoped, which often caused unexpected behavior.

ES6 introduced let and const, both of which are block-scoped.

🔸 let
Block scoped ✅

Can be updated ❗

Cannot be redeclared ❌ in the same scope   */

let x = 10;
x = 20; // ✅ Allowed
//let x = 30; // ❌ Error (same scope)

{
  let x = 50; // ✅ different block, no error
}
console.log(x); // 20 (outer x)

// const
// Block scoped ✅
// Must be initialized during declaration
// Cannot be updated ❌ or redeclared ❌
// The reference is constant, but object/array contents can change

const PI = 3.14;
//PI = 3.1415; // ❌ Error (cannot reassign)
// const PI; // ❌ Error (must be initialized)  

const arr = [1, 2];
arr.push(3); // ✅ Works (you changed the content, not the reference)
console.log(arr); // [1, 2, 3]
// arr = [4, 5]; // ❌ Error (cannot reassign)

//  Why not use var anymore?
//var is function scoped, so it leaks outside loops. let is block-scoped — much safer!

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // Logs 3, 3, 3
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // Logs 0, 1, 2
  }
  

//   2. Arrow Functions ()=>
//     Arrow functions are a shorter syntax for writing functions introduced in ES6.
   
    const greet = () => {
      console.log("Hello!");
    };
    greet(); // "Hello!"

    // Benefits of Arrow Functions
    // Shorter syntax
    // Lexical this (Doesn't bind its own this, inherits from parent)
    //    That's useful in things like event handlers or callbacks.

    //---> Arrow functions Example

const square = (n) => n * n;
console.log(square(4)); // 16

const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5    

const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};
greetUser("Karan"); // Hello, Karan!

// When Not to Use Arrow Functions
// When you need your own this (like inside object methods or constructors)

const user = {
    name: "Karan",
    greet: () => {
      console.log("Hi, " + this.name); // ❌ `this` is not the object
    }
  };
  
  user.greet(); // Hi, undefined

/*
  What are Template Literals?
  Template literals are string literals enclosed by backticks ` (instead of single ' or double " quotes).
  They allow:
  String interpolation (insert variables easily)
  Multiline strings
  Embedding expressions
  Tag functions (advanced)   */

  //💡 Example 1: Old vs New

  const name = "Karan";
  const age = 24; 
  // old way:
const greeting1 = "Hello, " + name + "! You are " + age + " years old.";

//✅ Template Literal:
const greeting= `Hello, ${name}! You are ${age} years old.`;

console.log(greeting); // Hello, Karan! You are 24 years old.
console.log(greeting1); // Hello, Karan! You are 24 years old.

console.log(`this is line 1
this is line 2
this is line 3`);

const a = 10, b = 5;
console.log(`The sum is ${a + b} and product is ${a * b}`);
// The sum is 15 and product is 50  
      