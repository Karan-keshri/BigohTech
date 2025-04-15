
// if-else statement
let age = 20;

if (age < 18) {
  console.log("Minor");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

// Switch statement

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Banana is yellow");
    break;
  case "apple":
    console.log("Apple is red");
    break;
  default:
    console.log("Unknown fruit");
}


// Ternary operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome!" : "Please log in.";

console.log(message); // "Welcome!"

//nullish coalescing operator
let userName = null; // or undefined
let uName = userName ?? "Guest"; // If userName is null or undefined
console.log(uName); // "Guest"



//Logical operators and their use in conditionals

const user = {
    name: "Alice",
    role: "admin",
    isLoggedIn: true,
    isBanned: false,
    token: "abc123",
  };
  
  if (user.isLoggedIn && user.role === "admin") {
    console.log("Welcome, Admin!");
  } else {
    console.log("Access denied");
  }
  
  
  if (user.role === "editor" || user.role === "admin") {
    console.log("Can edit content");
  } else {
    console.log("Read-only access");
  }
  
  if (!user.isBanned) {
    console.log("User is allowed");
  } else {
    console.log("User is banned");
  }

  let inputName = null; // or undefined
  let displayName = inputName ?? "Guest";
  console.log("Display Name:", displayName);
  
  if (displayName === "Guest") {
    console.log("Please log in to continue.");
  }
    else {
        console.log("Welcome back, " + displayName);
    }
  