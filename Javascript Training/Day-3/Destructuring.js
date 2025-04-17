// What is Destructuring?
// Destructuring allows you to unpack values from arrays
//  or objects into distinct variables in a clean, concise way

//Destructuring Arrays

const arr = [1, 2, 3];
const [a, b ,c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

//Skipping Values

const arr2 = [10, 20, 30,40];
const [x, , ,z] = arr2;

console.log(x); // 10
console.log(z); // 30


// Default Values

const arr3 = [5];
const [p, q = 100] = arr3;

console.log(p); // 5
console.log(q); // 100 (since it's missing in array)

//Swapping Variables

let num1 = 1, num2 = 2;
[num1 , num2] = [num2 , num1];

console.log(num1); // 2
console.log(num2); // 1


//Destructuring Objects

const person = {
  myName: "Karan",
  age: 24,
};

const { myName, age,array } = person;

console.log(myName); // "Karan"
console.log(age);  // 24


//Rename Variables
const user = {
  username: "karan24",
  city: "Delhi",
};

const { username: id, city: location } = user;

console.log(id);       // "karan24"
console.log(location); // "Delhi"


//Default Values
const user1 = { uName: "Karan" };
const { uName, email = "Not provided" } = user1;

console.log(uName);  // "Karan"
console.log(email); // "Not provided"


//Nested Destructuring
const person1 = {
  name: "Karan",
  name1: "Karan",
  name2: "Karan",
  address: {
    city: "Delhi",
    pin: 110001,
  },
};
const {name1,...nameALl}=person1;

const {
  address: { city , pin : pincode ,e_mail= "Not provided" },
  name,
} = person1;

console.log(city); // "Delhi"
console.log(pincode);  // 110001
console.log(e_mail); // "Not provided"
console.log(name); // "Karan"


//Destructuring Function Parameters
function displayInfo({ myName, age }) {
  console.log(`Name: ${myName}, Age: ${age}`);
  console.log("Name :" ,myName ,", Age :" , age);
}

displayInfo(person);

let s="Hello";
const {length}=s;
console.log(length); // H
  