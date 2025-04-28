"use strict";
// const obj = { a: 1, b: 'hello', c: true };
// const updated = updateObject(obj, 'b', 'world');
// Function that takes object as first parameter and second parameter
//  of take only keys of the object provided. Also value type should be same as the original
Object.defineProperty(exports, "__esModule", { value: true });
function updateObject(obj, key, value) {
    obj[key] = value;
    //return obj;
}
var obj = {
    name: "Karan",
    age: 23,
};
updateObject(obj, 'name', 'John');
console.log(obj);
