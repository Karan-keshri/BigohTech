/*Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const  

When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
*/

// 1. Automatically 
x=10; // Automatically declared variable
console.log(x); // Output: 10
console.log(typeof x); // Output: number

//2. Using var
{
var x=10; // function-scoped variable
}
console.log(x); // Output: 10
var x=20; // Re-declared variable using var
console.log(x); // Output: 20

//3. Using let
let num=10; // block-scoped variable
console.log(num); // Output: 10
// let num=20; // Re-declared variable using let (will throw an error)

//4. Using const
const pi=3.14; // block-scoped constant variable
//pi=3.14159; // Re-assignment will throw an error
console.log(pi); // Output: 3.14
