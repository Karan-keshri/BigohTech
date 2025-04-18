/*
closure :-> A closure gives you access to an outer function’s variables 
from an inner function, even after that outer function has returned.
*/
//Lexical scoping
function outerFunction() {
    let outerVariable = "I am an outer variable!"; // Outer variable

    function innerFunction() {
        console.log("inner ",outerVariable); // Accessing outer variable
    }

     innerFunction(); // Call inner function
}

outerFunction(); // Output: "inner  I am an outer variable!"

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2));   // 7
  console.log(add10(2));  // 12


function outer() {
    let count = 0;
  
    function inner() {
      count++;
      console.log(count);
    }
  
    return inner;
  }
  
  const closureFunc = outer(); // outer runs and returns inner
  closureFunc(); // 1
  closureFunc(); // 2
  closureFunc(); // 3



const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
  
  
  