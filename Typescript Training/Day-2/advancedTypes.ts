// 1. union

let value :number | string;
value="hello";
value=123;
//value=true;

// 2. intersection

interface person {
    name :string;
}

interface Employee {
    empId :number;
}

let empp : person & Employee ={
    name:"abc",
}
console.log(empp);

type employeePerson =person & Employee;

const emp :employeePerson ={
    name :"Karan",
    empId: 242,
}

console.log(emp);

type obj1= {
    name:string,
    id:number
}

const obj :obj1 &{[key:string]:string | number } = {
    name:"Karan",
    id:123,
    age :23
}
console.log(obj);


// keys of operator
// The keyof operator takes an object type and produces a string or numeric literal union of its keys
 interface animal {
    name : string,
    sound :string
}

type keysOfAnimal=keyof animal; // "name" | "sound"

function takeKey(keys:keysOfAnimal){
    console.log(keys);
}
takeKey('df');

let key : keysOfAnimal;
key="name";
//key="sound";
//key="abc"; //error

//The keyof operator is particularly
//  useful when combined with generics and mapped types 
// to create more flexible and type-safe functions or components.

function getProperty<obj,k extends keyof obj >(object:obj,key:k): obj[k]{
    return object[key];
}

const dog:animal={name:"Dog",sound:"bark"};

console.log(getProperty(dog,key));
console.log(getProperty(dog,"sound"));

// typeof

// Defining the variables of particular type and checking its type.
let str1: string = "Bigoh Tech";
console.log(typeof str1); //string
let num1: number = 123; 
console.log(typeof num1); //number
let bool1: boolean = true; 
console.log(typeof bool1); //boolean
let un_defined : undefined;
console.log(typeof un_defined); // undefined


const demo_obj :{name:string} ={name :"Karan Keshri"};
console.log(typeof demo_obj);

function add(num1 : number ,num2 :number) :number {
    return num1+num2;
}

let array :Array<number>=[1,2,3,4]
console.log(typeof array);

console.log(typeof add);

//Tuples in TypeScript are a fixed-size array where the type of each element is known. 
// They provide a way to represent an ordered list of elements with potentially different types.

const tuple :  [number,string,boolean]=[1,"Hello",true];
console.log(tuple);

tuple.push("abc");
tuple.unshift("xyz");
console.log(tuple);

export {}
