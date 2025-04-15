/* 
Why Functions?
With functions you can reuse code

You can write code that can be used many times.

You can use the same code with different arguments, to produce different results.
*/

function sayHello() {
    console.log("Hello!");
}
sayHello(); // Output: Hello!

//function with parameters
function greet(yourname){
    console.log("Hello " + yourname + "!");
}
greet("Karan"); // Output: Hello Karan!
greet("John"); // Output: Hello John!

//function with multiple parameters
function sum(a,b){
    console.log("Sum: " + (a+b));
}
sum(5,10); // Output: Sum: 15

//function with return value
function multiply(a,b){
    return a*b;
}

console.log("Multiplication: " + multiply(5,10)); // Output: Multiplication: 50

function sumAll(...numbers) {
    console.log(numbers); // an array of all arguments
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  }
  
  console.log(sumAll(1, 2, 3));          // Output: 6
  console.log(sumAll(10, 20, 30, 40));   // Output: 100
  

//Arrow function  
const hello=()=>console.log("Hello!"); 
hello(); // Output: Hello!

const multiline=()=>{
    console.log("first Line");
    console.log("second Line");
}
multiline(); // Output: first Line second Line

//arrow function with parameters
const greet1 = yourname => console.log("Hello " + yourname + "!");    
greet1("Karan"); // Output: Hello Karan!

//arrow function with multiple parameters
const sum1 = (a,b) => console.log("Sum: " + (a+b));
sum1(5,10); // Output: Sum: 15

function sumAll(...numbers) {
    let total = 0;
  
    for (let num of numbers) {
      total += num;
    }
  
    return total;
  }
  
  console.log(sumAll(2, 4, 6));           // Output: 12
  console.log(sumAll(10, 20, 30, 40));    // Output: 100
  

const person = {
    name: 'Charlie',
    
    // Regular Function
    regularGreet: function() {
      console.log('Regular Function: ' + this.name);  // "this" refers to the person object
    },
  
    // Arrow Function
    arrowGreet: () => {
      console.log('Arrow Function: ' + this.name);  // "this" is inherited from the surrounding context (not the person object)
    }
  };
  
  person.regularGreet();  // Output: Regular Function: Charlie
  person.arrowGreet();    // Output: Arrow Function: undefined (or global `this`, e.g. `window.name` in a browser)
  
 const fun= function () {
    console.log("Anonymous function");
}
fun(); 