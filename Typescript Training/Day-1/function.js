"use strict";
// Function Declarations
// A function declaration defines a function with a specific name 
// and a set of parameters, along with a block of code to execute.
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
var addition = function (x, y) { return x + y; };
console.log(addition(10, 20));
var subtraction = function (x, y) {
    return x - y;
};
console.log(subtraction(20, 10));
// optional parameter
function greet(name, greeting) {
    return "".concat(greeting || "Hello", " ").concat(name);
}
console.log(greet("Karan"));
console.log(greet("Karan", "Hyy"));
// default parameter
function multiply(num1, num2) {
    if (num2 === void 0) { num2 = 1; }
    return num1 * num2;
}
console.log(multiply(5, 10));
console.log(multiply(5));
//rest parameters
function addition1() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (sum, curr) {
        return sum + curr;
    });
}
console.log(addition1(1, 2, 3, 4, 5));
console.log(addition1(10, 20, 30));
