// record
// The Record<Keys, Type> utility type in TypeScript is used to construct an object type with specific keys and value types.
//  It provides a way to define the shape of an object where the keys are of a certain type 
var ages = {
    John: 25,
    Bob: 30,
    Alice: 35
};
console.log(ages);
var Status;
(function (Status) {
    Status["pending"] = "Pending";
    Status["success"] = "success";
    Status["failed"] = "failed";
})(Status || (Status = {}));
var taskStatus = {
    Pending: "Task is currently pending",
    success: "Task is successfully completed",
    failed: 'Task is failed'
};
console.log(taskStatus);
console.log(taskStatus.success);
var person1 = {
    name: "John"
};
console.log(person1);
// Readonly
var person2 = {
    name: "Rohan",
    age: 23,
    id: 123
};
var obj = { name: "John" };
var obj2 = {
    name: "Alice",
    age: 23
};
var employee = {
    Ename: 'John',
    Eid: 123
};
// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
var employee2 = {
    Ename: "Alice",
    Eid: 123
};
var val;
//console.log(val);
val = "qwerty";
val = 1234;
console.log(val);
// Return type
function multiply(a, b) {
    return a * b;
}
// Valid, result is of type number
var result = multiply(3, 4);
console.log(result);
var excludedFruits;
excludedFruits = "Mango";
var myPet;
myPet = 'cat';
// unknown
// In TypeScript, the unknown type is used for variables whose types aren't known in advance. 
// It ensures type safety by requiring explicit type checks or assertions before usage,
//  preventing arbitrary operations, and promoting safer handling compared to the `any` type.
function greet(name) {
    if (typeof name === 'string') {
        console.log("Hello ".concat(name, " !"));
    }
    else if (typeof name === 'undefined') {
        console.log("Hello Guest ! ");
    }
    else {
        console.log("Hello There !");
    }
}
var name2;
greet(name2);
greet("Karan");
greet(123);
var palette = {
    red: 'red',
    green: "green",
    blue: 'blue',
};
var redValue = palette.red; // Type is number[]
var greenValue = palette.green; // Type is string
