// Write a type guard function that checks if a value is an instance of a class Dog.
//  Then, create a function that takes an array of mixed objects and returns only the objects that are instances of Dog.
// const animals = [new Dog(), new Cat(), new Dog()];
// console.log(filterDogs(animals));
// Output: [Dog, Dog]
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.isLive = function () {
        console.log("Animal is live");
    };
    return Animal;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    // constructor(name:string){
    //     this.name=name;
    // }
    Dog.prototype.isLive = function () {
        console.log("Animal is live");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    // constructor(name:string){
    //     this.name=name;
    // }
    Cat.prototype.isLive = function () {
        console.log("Animal is live");
    };
    return Cat;
}());
function filterDogs(obj) {
    var dog = obj.filter(function (curAnimat) {
        if (curAnimat instanceof Dog)
            return curAnimat;
    });
    return dog;
}
var animals = [new Dog(), new Cat(), new Dog(), new Animal()];
console.log(filterDogs(animals));
