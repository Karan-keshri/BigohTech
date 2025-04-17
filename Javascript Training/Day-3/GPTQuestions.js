// 4 Basic-Level Questions
// ✅ Destructuring Basics


// const person = { name: "Karan", age: 25 };
// const { name, age } = person;
// console.log(name, age);
// ❓1. Modify the code to also extract a default value for a property city which is not present.

//solution 
const person = { pName: "Karan", age: 25 };
const { pName, age,City="Noida" } = person;
console.log(pName, age,City);

//✅ Spread Operator in Arrays

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = [...arr1, ...arr2];
// console.log(combined);
// ❓2. Add 0 at the beginning and 5 at the end using the spread operator.

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [0,...arr1, ...arr2,5];
console.log(combined);

// ✅ Arrow Function & Template Literals

// const greet = (name) => `Hello, ${name}!`;
// console.log(greet("Karan"));
// ❓3. Rewrite this as a regular function and then use backticks to display:
// "Welcome, <name>! You are awesome."

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Karan"));

function greet1(name) {
    console.log(`Welcome, ${name}! You are awesome.`);
}
greet1("Karan");

//✅ Callback Basics

//❓4. Call greet with "Karan" and a callback that logs the message to console.

function greet2(name, callback) {
    callback(`Hello ${name}`);
  }

  function logMessage(message) {
    console.log(message);
  }

  greet2("Karan", logMessage); // "Hello Karan"


  // 3 medium questions

  //⚡ Rest Operator with Functions

//❓5. How does the rest operator work here? Modify to return average of all numbers passed.

function avg(...numbers) {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    return total / numbers.length;
}

console.log(avg(10, 20, 30)); // Output: 20


//⚡ Promise Basics

// ❓6. Create a function getData() that returns a Promise
//  that resolves after 2 seconds with {user: "Karan"}. Then consume it using .then().

function getData() {
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log("Fetching data...");
            resolve({user: "Karan"});
        },2000)
    });
}

getData().then(function(data){
console.log("Data received:",data);
console.log("User:",data.user);
    })

//⚡ Destructuring Nested Objects

//❓7. Destructure the city and zip properties from the user object.

const user = {
    name: "Karan",
    address: {
      city: "Delhi",
      zip: "110001"
    }
  };

//   const{city,zip}=user.address;
//   console.log(city,zip); // Output: "Delhi 110001"

  const {name,address :{city,zip}}=user;
    console.log(city,zip); // Output: "Delhi 110001"

    //🔴 3 Hard-Level Questions
//🔥 Callback Hell → Promises

//❓8. Simulate a task flow: order food → cook → serve → eat using callbacks. Then refactor it using Promises.

setTimeout(function () {
    console.log("Order food..."); // Step 1: Order food
    setTimeout(function () {
        console.log("Cook food..."); // Step 2: Cook food
        setTimeout(function () {
            console.log("Serve food..."); // Step 3: Serve food
            setTimeout(function () {
                console.log("Eat food..."); // Step 4: Eat food
            }, 2000);
        }, 2000);
    }, 2000);
});

// Refactored using Promises
function orderFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order food...");
            resolve();
        }, 2000);
    });
}

function cookFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Cook food...");
            resolve();
        }, 2000);
    });
}

function serveFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Serve food...");
            resolve();
        }, 2000);
    });
}

function eatFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Eat food...");
            resolve();
        }, 2000);
    });
}

// Using the Promises
orderFood()
    .then(cookFood)
    .then(serveFood)
    .then(eatFood)
    .then(() => {
        console.log("Finished eating!");
    });


  //  🔥 Async/Await with Error Handling

//❓9. Create an async function to call fetchUser() with try...catch.

function fetchUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = false;
        if (!error) resolve({ name: "Karan" });
        else reject("Failed to fetch");
      }, 2000);
    });
  }

async function getUser() {
    try {
      const user = await fetchUser();
      console.log("User:", user);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getUser(); // Call the async function
// Output after 2 seconds: User: { name: "Karan" }

//🔥 Spread, Rest, Destructure Combo

// ❓10. Log the first name separately, and combine rest using template literals into a string like:
// "Remaining: Singh Rawat"


const fullName = ["Karan", "Singh", "Rawat"];
const [first, ...rest] = fullName;
const remaining = rest.join(" ");
console.log(`First Name: ${first}`); // Output: "First Name: Karan"
console.log(`Remaining: ${remaining}`); // Output: "Remaining: Singh Rawat"
// Output: "Remaining: Singh Rawat"
