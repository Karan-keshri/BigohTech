// Define an interface Person with properties name (string) and age (number). 
// Then, create a function that takes a Person object 
// and returns a string in the format: "Name: <name>, Age: <age>".

interface person {
    name : string;
    age :number;
}

function describePerson(obj :person) : string{
    return `"Name: ${obj.name}, Age: ${obj.age}"`;
}

console.log(describePerson({ name: 'Alice', age: 30 }));

//Expected Output: "Name: Alice, Age: 30"
export {}

// this is the topics
// --> call apply bind
// --> asysnac js
// --> scope--> clusres, TDZ
// --> call stack , microtsk quue
//  --> primitive and reference type
// --> prottyep prototype method 
// -->array methds and object mrhotd