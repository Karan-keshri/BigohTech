// What is a Callback Function?
// A callback is a function passed as an argument to another function,
//  which is invoked later, often after some task is done.

function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function processUser(callback) {
    const name = "Karan";
    callback(name); // calling the function that was passed
  }
  
  processUser(greet); // Output: Hello, Karan!

/*
Role in Asynchronous Programming
JavaScript is single-threaded, so it can't do multiple things at once. To handle time-consuming operations like:

API calls

File reading

Timers

UI updates

...we use asynchronous programming. Callbacks let us defer execution until the task is complete.
*/

//  Example with setTimeout (Async)
console.log("Start");

setTimeout(function () {
  console.log("Callback executed after 2 seconds");
}, 2000);

console.log("End");
// Output:
// Start
// End
// Callback executed after 2 seconds


function fetchData(callback) {
    // Simulating an API call
    setTimeout(() => {
      console.log("Fetched data");
      callback(); // call when done
    }, 1000);
  }
  
  function processData() {
    console.log("Processing data...");
  }
  
  fetchData(processData); // passing a function to run after async task
  
  // Output:
  // Start
 // Fetched data
// Processing data...

console.log("Start");

setTimeout(() => {
  console.log("1. Order received");

  setTimeout(() => {
    console.log("2. Food is being cooked");

    setTimeout(() => {
      console.log("3. Food is served");

      setTimeout(() => {
        console.log("4. Eating food");
        console.log("Finished!");
      }, 2000);

    }, 3000);

  }, 4000);

}, 1000);

