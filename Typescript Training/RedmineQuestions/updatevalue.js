"use strict";
// function updateValuesWithPrefix(obj, prefix){
//   return obj;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// Example usage
// const obj = {
//   name: "Alice",
//   age: 30,
//   address: {
//     city: "Wonderland",
//     zip: 12345,
//     location: {
//       country: "Fantasy",
//     },
//   },
//   isActive: true,
// };
// const updatedObj = updateValuesWithPrefix(obj, "Hello, ");
// console.log(updatedObj);
/*
Output:
{
  name: "Hello, Alice",
  age: 30,
  address: {
    city: "Hello, Wonderland",
    zip: 12345,
    location: {
      country: "Hello, Fantasy",
    },
  },
  isActive: true,
}
*/
function updateValuesWithPrefix(obj, prefix) {
    var result = {};
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            result[key] = updateValuesWithPrefix(obj[key], prefix);
        }
        else if (typeof obj[key] === 'string') {
            result[key] = prefix + obj[key];
        }
        else {
            result[key] = obj[key];
        }
    }
    return result;
}
var obj = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: 12345,
        location: {
            country: "Fantasy",
        },
    },
    isActive: true,
};
var updatedObj = updateValuesWithPrefix(obj, "Hello, ");
console.log(updatedObj);
