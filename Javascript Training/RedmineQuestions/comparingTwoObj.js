// Write an “assertObjectsEqual” function from scratch which take two object and string as parameter and return string.
// The examples below represent different use cases.

// Success Case:
// Input

// var expected = {foo: 5, bar: 6};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);

// redo

let obj1 = { foo: 5, bar: 6 };
let obj2 = { foo: 5, bar: 6 };

let obj3 = { foo: 5, bar: 6 };
let obj4 = {  bar: 6,foo: 5 };


function assertObjectsEqual(actual, expected, message) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        return "Passed";
    } else {
        return `Failed Expected ${actual} , but got ${expected}`;
    }
}

console.log(assertObjectsEqual(obj1, obj2, 'detects that two objects are equal')); 
console.log(assertObjectsEqual(obj3, obj4, 'detects that two objects are equal')); 

