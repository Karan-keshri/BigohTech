// What is an Array?
// An array in JavaScript is a special object used to store multiple values in a single variable.
// It can hold different data types, including numbers, strings, objects, and even other arrays.

let array = [1, 2, 3, 4, 5]; // Array of numbers
let array2 = new Array(10, 20, 30, 40, 50); // Another way to create an array
let array3 = new Array(5); // Creates an array of length 5 (empty slots)
let names = ["Alice", "Bob", "Charlie"]; // Array of strings
let mixedArray = [1, "Hello", true, null]; // Array with mixed types
let nestedArray = [[1, 2], [3, 4], [5, 6, 7]]; // Array of arrays

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(array2); // Output: [10, 20, 30, 40, 50]
console.log(array3); // Output:  (length 5 but no values)
console.log(array3.length); // Output: 5 (length of the array)
console.log(names); // Output: ["Alice", "Bob", "Charlie"]
console.log(mixedArray); // Output: [1, "Hello", true, null]
console.log(nestedArray); // Output: [[1, 2], [3, 4], [5, 6]]
console.log(nestedArray[0]); // Output: [1, 2]
console.log(nestedArray[0][1]); // Output: 2 (Accessing nested array element)
console.log(nestedArray[2][2]); // Output: 3 (Accessing nested array element)


// Array Methods
// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
array.push(6); // Adds 6 to the end of the array
console.log(array); // Output: [1, 2, 3, 4, 5, 6]

// 2. pop() - Removes the last element from an array and returns that element.
let lastElement = array.pop(); // Removes the last element (6)
console.log(lastElement); // Output: 6
console.log(array); // Output: [1, 2, 3, 4, 5]

// 3. shift() - Removes the first element from an array and returns that element.
let firstElement = array.shift(); // Removes the first element (1)  
console.log(firstElement); // Output: 1
console.log(array); // Output: [2, 3, 4, 5] 

// 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.`  
array.unshift(1); // Adds 1 to the beginning of the array
console.log(array); // Output: [1, 2, 3, 4, 5]

// 5. splice() - Adds or removes elements from an array at a specific index.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
array.splice(5, 0, 6, 7); // Removes 2 elements starting from index 1 and adds 20 and 30
console.log(array); // Output: [1, 2, 3, 4, 5, 6, 7]

// 6. slice() - Returns a shallow copy of a portion of an array into a new array object.
// Syntax: array.slice(start, end)
let slicedArray = array.slice(1, 4); // Slices from index 1 to index 4 (not inclusive)
console.log(slicedArray); // Output: [2, 3, 4]

// 7. concat() - Merges two or more arrays and returns a new array.
let mergedArray=array.concat(slicedArray); // Merges array and slicedArray
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 2, 3, 4]

// 8. join() - Joins all elements of an array into a string.
// Syntax: array.join(separator)
let joinedString = array.join(", "); // Joins with a comma and space
console.log(joinedString); // Output: "1, 2, 3, 4, 5, 6, 7"

// 9. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if not found.
let index = array.indexOf(3); // Finds the index of 3
console.log(index); // Output: 2 (index of 3)

// 10. lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if not found.  
array.push(3); // Adds another 3 to the end of the array
let lastIndex = array.lastIndexOf(3); // Finds the last index of 3
console.log(lastIndex); // Output: 2 (last index of 3)

// 11. includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let includesValue = array.includes(4); // Checks if 4 is in the array
console.log(includesValue); // Output: true (4 is in the array)

// 12. isArray() - Determines whether the passed value is an Array.
// Syntax: Array.isArray(value)
let isArrayCheck = Array.isArray(array); // Checks if array is an array
console.log(isArrayCheck); // Output: true (array is an array)

// 13. find() - Returns the value of the first element in the provided array that satisfies the provided testing function.
// Otherwise undefined is returned.
let foundElement = array.find(function (element) {
  return element > 4; // Finds the first element greater than 4
});
console.log(foundElement); // Output: 5 (first element greater than 4)

// 14. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.
// Otherwise -1 is returned.
let foundIndex = array.findIndex(function (element) {
  return element > 4; // Finds the index of the first element greater than 4
});
console.log(foundIndex); // Output: 4 (index of the first element greater than 4)

//Understanding array iteration methods: for, forEach, map, filter, reduce
// 1. for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // Output: 1, 2, 3, 4, 5, 6, 7
}

// 2. forEach() - Executes a provided function once for each array element.
array.forEach(function (element) {
  console.log(element); // Output: 1, 2, 3, 4, 5, 6, 7
});

// 3. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
let doubledArray = array.map(function (element) {
  return element * 2; // Doubles each element
});

console.log(doubledArray); // Output: [2, 4, 6, 8, 10, 12, 14]

// 4. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
let filteredArray = array.filter(function (element) {
  return element > 3; // Filters elements greater than 3
});

console.log(filteredArray); // Output: [4, 5, 6, 7]

// 5. reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let sum = array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue; // Sums all elements
}, 0); // Initial value is 0
console.log(sum); // Output: 28 (sum of all elements in the array)



