// Feature            | Spread Operator                       | Rest Operator
// 📍 Used in         | Function calls, array/object creation  | Function parameters, destructuring
// 🎯 Purpose        | Expands elements                       | Collects elements
// 💥 Think of it as | Breaking things apart                  | Gathering things together

// SPREAD (...) - Applications
//The spread operator is used to expand or spread elements of an iterable (like an array) into individual elements.
// ✅ 1. Cloning Arrays (Shallow Copy)

const original = [1, 2, 3];
const copy = [...original]; // not linked

copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]

const org = [1, 2, 3, [4]];
const cpy = [...org];
cpy.push(10);
cpy[3].push(20);
console.log(org); // [1, 2, 3, [4, 20]] 
console.log(cpy); // [1, 2, 3, [4, 20], 10]
cpy.pop(); // remove last element
cpy[3].pop();
cpy[3].pop();
console.log(org); // [1, 2, 3, [4, 20]]
console.log(cpy); // [1, 2, 3, [4, 20]]
// The spread operator creates a shallow copy, meaning nested objects/arrays are still linked.



//✅ 2. Merging Arrays

const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b]; // [1, 2, 3, 4]
console.log(merged); // [1, 2, 3, 4]


//✅ 3. Passing Array as Function Arguments

const nums = [4, 7, 1];
console.log(Math.max(...nums)); // 7


//✅ 4. Copying & Merging Objects

const user = { name: "Alex" };
const details = { age: 25 };
const merge = { ...user, ...details };
console.log(merge); // { name: "Alex", age: 25 }

// ✅ 5. Cloning Objects (Shallow Copy) 
const originalObj = { a: 1, b: 2 };
const copyObj = { ...originalObj }; // not linked




// 🔥 REST (...) - Applications
//It collects multiple elements into a single array or object — the opposite of spread.
// ✅ 1. Functions with Variable Number of Arguments

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6


//✅ 2. Destructuring Arrays

const [first, ...others] = [10, 20, 30, 40];
console.log(first);  // 10
console.log(others); // [20, 30, 40]


//✅ 3. Destructuring Objects

const { name, ...restProps } = {
  name: "Karan",
  age: 25,
  city: "Delhi"
};
console.log(name);      // "Karan"
console.log(restProps); // { age: 25, city: "Delhi" }