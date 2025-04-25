"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        console.log("Animal makes sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Dog sound is whoof");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("cat sound is meow");
    };
    return Cat;
}(Animal));
function animalSounds(animal) {
    animal.makeSound();
}
var cat = new Cat();
var dog = new Dog();
console.log(cat instanceof Cat);
animalSounds(cat);
animalSounds(dog);
// abstract class
var TakePhoto = /** @class */ (function () {
    function TakePhoto(camera) {
        this.camera = camera;
    }
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(camera, profileName) {
        var _this = _super.call(this, camera) || this;
        _this.profileName = profileName;
        return _this;
    }
    Instagram.prototype.capturePhoto = function () {
        console.log("Photo captured");
    };
    return Instagram;
}(TakePhoto));
var user = new Instagram("Sony", "Aman");
user.capturePhoto();
