"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
// primitive type number string boolean,null,undefined,bigInt,symbol
// Primitive types
// let str: string = "hello";
// let num: number = 10;
// let bool: boolean = true;
// let nullValue: null = null;
// let undef: undefined ;
// let sym: symbol = Symbol("unique");
// let big: bigint = 12345678901234567890n;
//syntax - let variableName : type =value
var greetings = "Hello Karan";
console.log(greetings.toLowerCase());
console.log(greetings);
// No type annotation needed -- 'myName' inferred as type 'string'
var myName = "Alice";
var myNum = 10.55;
console.log(myNum.toFixed(1));
var id = 123;
console.log(id);
var isLogged = true;
console.log(isLogged);
//Reference type Array,object,tuple,Enum,function,class,interface
//Reference type Array,object,tuple,Enum,function,class,interface
// let items: string[] = ['apple', 'banana'];
// let point: [number, number] = [10, 20]; // Tuple
// let arr :number[]=[1,2,3,4,5]
// let anything: any = 42;
var obj = { name: "John", age: 30 };
console.log(obj);
var obj3 = { name: "karan", age: 24 };
obj3.name = "Karan Keshri";
console.log(obj3.name);
var arr = [1, 2, 3];
console.log(arr);
function add(a, b) {
    return a + b;
}
console.log(add(5, 7));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var person1 = new Person("Karan");
console.log(person1.name);
var obj2 = { name: "Dog", age: 2 };
obj2.name = "xyz";
obj2.food = "meat";
console.log(obj2);
var tup = ["hello", 10];
console.log(tup, tup[0], tup[1]);
var mix = [1, "1", true, 0, { name: "ll", id: 123 }];
mix[0] = "1";
mix[3] = 123;
console.log(mix, typeof mix);
var hero;
function getHero() {
    return "Superman";
}
hero = getHero();
console.log(hero);
function getNum() {
    return 10;
}
hero = getNum();
console.log(hero);
