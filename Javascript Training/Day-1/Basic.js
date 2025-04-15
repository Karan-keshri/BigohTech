// 1. Basic Syntax, Variables & Data Types

let myName = "Karan Keshri";              // String

console.log(myName);            // Output: Karan Keshri
console.log(typeof myName);    // Output: string

       
let age = 23;                     // Number
console.log(age);             // Output: 23
console.log(typeof age);     // Output: number

let isStudent = true;            // Boolean
console.log(isStudent);        // Output: true
console.log(typeof isStudent); // Output: boolean

let abc;
console.log(abc);             // Output: undefined
console.log(typeof abc);     // Output: undefined

let xyz=null;            // Null
console.log(xyz);        // Output: null
console.log(typeof xyz); // Output: object 
// Note: typeof null is an object due to a bug in JavaScript
//When JavaScript was first created , null was assigned the internal tag 0 to represent the type "object".
//typeof checks something, and it has tag 0, it returns "object" — even though it's actually null.

let largeNumber=BigInt("1234567890123456789012345678901234567890"); // BigInt
console.log(largeNumber);        // Output: 1234567890123456789012345678901234567890n
console.log(typeof largeNumber); // Output: bigint

let mySymbol = Symbol("unique"); // Symbol
console.log(mySymbol);        // Output: Symbol(unique)
console.log(typeof mySymbol); // Output: symbol

// Symbol creates a unique and immutable identifier.
// Great for defining hidden object properties or avoiding name collisions.

const a = Symbol("id");
const b = Symbol("id");

console.log(a === b); // false



let hobbies = ["coding", "Listening music"]; // Array (Reference)
console.log(hobbies);        // Output: [ 'coding', 'Listening music' ]
console.log(typeof hobbies); // Output: object

let num=[1,2,3,4,5]; // Array (Reference)
console.log(num);        // Output: [ 1, 2, 3, 4, 5 ]
console.log(typeof num); // Output: object


const person = { name: "Karan", age: 23 }; // Object (Reference)
console.log(person);        // Output: { name: 'Karan', age: 23 }
person.name = "Karan Keshri"; // Updating object property
console.log(person);        // Output: { name: 'Karan Keshri', age: 23 }
console.log(person.name); // Output: Karan  
console.log(person.age);  // Output: 23
console.log(typeof person); // Output: object
console.log(typeof person.name); // Output: string
console.log(typeof person.age);  // Output: number

// 2. Primitive vs Reference Types

// Primitive: number, string, boolean, null, undefined
let x = 10;
let y = x;  // y is a copy
y=20; // changing y doesn't affect x
console.log(x); // Output: 10   
console.log(y); // Output: 20

// Reference: array, object, function
let arr1 = [1, 2];
let arr2 = arr1; // arr2 points to same memory
arr2[0] = 10; // changing arr2 affects arr1
arr1[1]=20; // changing arr1 affects arr2
console.log(arr1); // Output: [ 10, 20 ]
console.log(arr2); // Output: [ 10, 20 ]