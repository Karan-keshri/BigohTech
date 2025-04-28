// record
// The Record<Keys, Type> utility type in TypeScript is used to construct an object type with specific keys and value types.
//  It provides a way to define the shape of an object where the keys are of a certain type 

type UserAges =Record<string,number>;

const ages :UserAges={
    John :25,
    Bob :30,
    Alice :35
}

console.log(ages);

enum Status {
pending= "Pending",
success= "success",
failed= "failed"
}

type StatusType=Record<Status,string>;

const taskStatus:StatusType={
    Pending : "Task is currently pending",
    success :"Task is successfully completed",
    failed :  'Task is failed'
}

console.log(taskStatus);
console.log(taskStatus.success);

type CustomPartial <T> ={
    [K in keyof T] ?: T[K];
}

// partial
// Syntax:
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

interface Person {
    name :string;
    age :number;
    id :number
}

type PartialPerson =Partial<Person>;

const person1 :PartialPerson ={
    name: "John"
}
console.log(person1);

// Readonly
const person2 :Readonly<Person>={
    name:"Rohan",
    age :23,
    id :123
}

type CustomReadonly<T> ={
    readonly [K in keyof T]  : T[K];
}
//person2.name="John";

// Required<Type>
//Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

type CustomRequired<T> ={
    [K in keyof T] -?: T[K];
}

interface Props {
    name ?: string;
    age ?: number;
}

const obj:Props={name : "John"};
const obj2 : Required<Props>={
    name: "Alice",
    age :23
}

// // Omit<Type, Keys>
// Constructs a type by picking all properties from Type and
//  then removing Keys (string literal or union of string literals). The opposite of Pick.

type CustomOmit<T,key extends keyof T>={
    [K in Exclude<keyof T,key>] : T[K] 
}

interface Employee {
    Ename:string;
    Eid :number;
    Edept :String;
    Esalary :number;
}

const employee : Omit<Employee,'Esalary'|'Edept'> ={
    Ename : 'John',
    Eid :123
}

// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

type CustomPick<T,key extends keyof T>={
    [K in key] : T[K];
}

const employee2 :Pick<Employee,"Ename"|"Eid">={
    Ename : "Alice",
    Eid :123
}

// NonNullable<Type>
// Constructs a type by excluding null and undefined from Type.

type CustomNonNullable<T>  = T extends null | undefined ? never : T;

type NotNull = NonNullable<string | number | undefined | null>;
let val : NotNull;
//console.log(val);
val ="qwerty";
val= 1234
console.log(val);

// Return type

function multiply(a: number, b: number): number {
    return a * b;
}

type MultiplyFunctionReturnType = ReturnType<typeof multiply>;

// Valid, result is of type number
const result: MultiplyFunctionReturnType = multiply(3, 4);

console.log(result);

// Exclude 
type CustomExclude<T,U>=T extends U ? never :T;

type Fruits= "apple" | "banana" | "Grapes" | "Mango" ;

let excludedFruits :Exclude<Fruits ,"apple" | "Grapes">;

excludedFruits="Mango";

// extract 
type Animal2 = 'cat' | 'dog' | 'bird' | 'fish'; 
  
/* Define the Mammal type as the subset  
of Animal that includes 'cat' and 'dog' */
type Mammal = Extract<Animal2, 'cat' | 'dog'>; 
  
let myPet: Mammal;
myPet='cat'; 
//myPet='dog'

// unknown
// In TypeScript, the unknown type is used for variables whose types aren't known in advance. 
// It ensures type safety by requiring explicit type checks or assertions before usage,
//  preventing arbitrary operations, and promoting safer handling compared to the `any` type.

function greet(name : unknown) : void{
    if(typeof name ==='string'){
        console.log(`Hello ${name} !`);
    }
    else if(typeof name=== 'undefined'){
        console.log("Hello Guest ! ")
    }
    else {
        console.log("Hello There !")
    }
}
let name2 :undefined;
greet(name2);
greet("Karan")
greet(123)

// satisfies operator
type Colors = "red" | "green" | "blue";

const palette = {
  red: 'red',
  green: "green",
  blue: 'blue',
} satisfies Record<Colors, string>;

const redValue = palette.red; 
const greenValue = palette.green; 

export {}

