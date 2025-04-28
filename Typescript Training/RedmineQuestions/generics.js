"use strict";
// Generic type
// Create Type
// Add constraints
// Add default value
// Add another argument
// One should be optional another one required
// Q1. Create a working example to showcase the above steps
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var stringGeneric = {
    value: "Hello",
    name: "World"
};
var numberGeneric = {
    value: 123,
};
// Q.2
// Generic Function
// Create Generic function
// Make one parameter of function depend on another
// How the argument send change the type of function
// Q2. Create a working example to showcase the above steps
function Genericfn(first, second) {
    return [first, second];
}
var result1 = Genericfn("HEllo", "World");
console.log(result1);
var result2 = Genericfn({ name: "Karan" }, { age: 23 });
console.log(result2);
var obj1 = { a: 1, b: { c: 2 } };
var obj2 = { b: { d: 3 }, e: 4 };
var merged = __assign(__assign({}, obj1), { obj2: obj2 });
console.log(merged);
