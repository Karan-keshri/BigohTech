// 1. Type Annotation
// Type annotations explicitly specify the type of a variable, function parameter,
//  or return value. They are written after a colon following the variable or parameter name.

let age :number=10;
let name :string ="Karan";

function greet(name :string): string{
    return `Hello ${name}`;
}
console.log(age,name);
console.log(greet("Karan"));

// 2. Type Inference
// Type inference allows the TypeScript compiler to automatically deduce
//  the type of a variable or expression based on its initialization or context. 

let id=123;
let firstName="Karan";

function add(num1:number ,num2:number){
    return num1+num2;
}


//Literals
//Literals are specific, unchangeable values that can be used as types.
//  TypeScript supports string, number, and boolean literals.
// They allow for precise type definitions, restricting a variable to hold only a particular value.

let status: "success" | "error" = "success";
let pi: 3.14 = 3.14;
let isEnabled: true |false = false;



export{}