// 1. union
var value;
value = "hello";
value = 123;
var empp = {
    name: "abc",
};
console.log(empp);
var emp = {
    name: "Karan",
    empId: 242,
};
console.log(emp);
var obj = {
    name: "Karan",
    id: 123,
    age: 23
};
console.log(obj);
var key;
key = "name";
//key="sound";
//key="abc"; //error
//The keyof operator is particularly
//  useful when combined with generics and mapped types 
// to create more flexible and type-safe functions or components.
function getProperty(object, key) {
    return object[key];
}
var dog = { name: "Dog", sound: "bark" };
console.log(getProperty(dog, key));
console.log(getProperty(dog, "sound"));
// typeof
// Defining the variables of particular type and checking its type.
var str1 = "Bigoh Tech";
console.log(typeof str1); //string
var num1 = 123;
console.log(typeof num1); //number
var bool1 = true;
console.log(typeof bool1); //boolean
var un_defined;
console.log(typeof un_defined); // undefined
var demo_obj = { name: "Karan Keshri" };
console.log(typeof demo_obj);
function add(num1, num2) {
    return num1 + num2;
}
var array = [1, 2, 3, 4];
console.log(typeof array);
console.log(typeof add);
//Tuples in TypeScript are a fixed-size array where the type of each element is known. 
// They provide a way to represent an ordered list of elements with potentially different types.
var tuple = [1, "Hello", true];
console.log(tuple);
tuple.push("abc");
tuple.unshift("xyz");
console.log(tuple);
