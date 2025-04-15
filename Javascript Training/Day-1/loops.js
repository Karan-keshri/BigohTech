//Loops in JavaScript: for, for-of, for-in

for (let i = 0; i < 5; i++) {
    console.log(i);  // Prints: 0, 1, 2, 3, 4
  }

  
  
// The for-of loop iterates over iterable objects (like arrays, strings, etc.) and returns the values of the iterable.

let array = [10, 20, 30];

for (let item of array) {
  console.log(item);
}
// Prints: 10, 20, 30

let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);  // Prints: apple, banana, cherry
}


let person = { name: "John", age: 30, country: "USA" };

for (let key in person) {
  console.log(key, person[key]);
}
// Prints: name John, age 30, country USA
// The for-in loop iterates over the properties of an object and returns the keys of the object.