"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("./math");
console.log((0, math_1.add)(1, 2));
console.log((0, math_1.sub)(100, 10));
var MathNamespace = {
    add: function (a, b) {
        return a + b;
    },
    pi: 3.14
};
// Usage
console.log(MathNamespace.add(3, 5));
console.log(MathNamespace.pi);
