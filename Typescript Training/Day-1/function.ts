
// Function Declarations
// A function declaration defines a function with a specific name 
// and a set of parameters, along with a block of code to execute.

function add(num1:number,num2:number) : number{
    return num1+num2;
}

console.log(add(10,20));

// Function Types
// Function types define the types of parameters 
// and the return type of a function. 
// They can be expressed using type aliases or interfaces

// Type alias
type operation=(a:number,b:number)=>number;

// Interface
interface operationInterface{
    (a:number,b:number):number;   
}

const addition:operation=(x,y)=>x+y;

console.log(addition(10,20));

const subtraction:operationInterface=function (x,y){
    return x-y;
}
console.log(subtraction(20,10));

// optional parameter

function greet(name : string ,greeting ?:string) : string {
    return `${greeting||"Hello"} ${name}`;
}
console.log(greet("Karan"));
console.log(greet("Karan","Hyy"));

// default parameter

function multiply(num1:number,num2=1) : number{
    return num1*num2;
}

console.log(multiply(5,10));
console.log(multiply(5));

//rest parameters

function addition1(...nums :number[]) :number{
    return nums.reduce(function(sum,curr){
        return sum+curr;
    },0)
}

console.log(addition1(1,2,3,4,5));
console.log(addition1(10,20,30));


// bad behaviour
function check({name:string,age:number}) :{name:string,age:number}{
    return {name:"karan",age:23}
}

const obj4 :{name:string ,age:number ,id:number}={
    name:"Karan",
    age:23,
    id:123,
}

console.log(check({name: "abc",age:12}))
console.log(check(obj4));

export{}