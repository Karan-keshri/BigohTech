// Generic type
// Create Type
// Add constraints
// Add default value
// Add another argument
// One should be optional another one required
// Q1. Create a working example to showcase the above steps


type Generic<T extends string | number=number>={
    value:T,
    name ?:string
}


const stringGeneric :Generic<string> ={
    value :"Hello",
    name :"World"
}

const numberGeneric :Generic ={
    value :123,
}

// Q.2
// Generic Function
// Create Generic function
// Make one parameter of function depend on another
// How the argument send change the type of function
// Q2. Create a working example to showcase the above steps

function Genericfn<T,U extends T>(first:T,second :U) :[T,U]{
    return [first,second];
}

const result1=Genericfn<string,string>("HEllo","World");
console.log(result1);

const result2=Genericfn<Object,{age :23}>({name:"Karan"},{age : 23});
console.log(result2);


export {}