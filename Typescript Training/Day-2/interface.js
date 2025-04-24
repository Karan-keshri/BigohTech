"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var employee1 = {
    name: "Karan",
    age: 23,
    salary: 12345
};
console.log(employee1);
var person = {
    name: "Xyz",
    age: 12,
    salary: 123
};
console.log(person);
var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.getArea = function () {
        return 3.14 * this.radius * this.radius;
    };
    return circle;
}());
var areaOfCircle = new circle(100);
console.log(areaOfCircle.getArea());
