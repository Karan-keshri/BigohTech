var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getPersonDetails = function () {
        console.log("Name of employee is ".concat(this.name, " age is ").concat(this.age));
    };
    return Person;
}());
var person = new Person("John", 123);
person.getPersonDetails();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getEmployeeDetails = function () {
        console.log("name - ".concat(this.name, " age - ").concat(this.age, " salary - ").concat(this.salary));
    };
    return Employee;
}(Person));
var emp = new Employee("John", 23, 12345.567);
emp.getEmployeeDetails();
