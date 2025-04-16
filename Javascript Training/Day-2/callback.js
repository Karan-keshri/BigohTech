/* 
A callback function is a function passed as an argument to another function,
 and it is usually executed after some operation is completed.

Think of it like:

"Hey function A, when you're done, call function B."

Why Use Callbacks?
Because JavaScript is asynchronous — it doesn't wait!
So when doing things like:

Loading a file

Making an API call

Waiting for user input
...we can use a callback to run code after it's done.
*/

function greet(yourName,callback){
    console.log("Hello " ,yourName,"!")
    callback();
}

function sayGoodbye(){
    console.log("Goodbye !");
}

greet("Karan Keshri",sayGoodbye); // Output: Hello Karan Keshri ! Goodbye!


console.log("Start");

setTimeout(function () {
  console.log("This runs later (callback)");
}, 2000);

console.log("End");


// Example of Callback with Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// The map function takes a callback that processes each element in the array and returns a new array with the results.

//callback hell

console.log("Process started...");

setTimeout(function () {
  console.log("Step 1: Registering user...");

  setTimeout(function () {
    console.log("Step 2: Logging in...");

      setTimeout(function () {
        console.log("Step 3: Welcome, Karan!");
      }, 100);

    }, 1000);

}, 3000);
