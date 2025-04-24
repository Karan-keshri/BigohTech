// Define an interface Person with properties name (string) and age (number). 
// Then, create a function that takes a Person object 
// and returns a string in the format: "Name: <name>, Age: <age>".
function describePerson(obj) {
    return "\"Name: ".concat(obj.name, ", Age: ").concat(obj.age, "\"");
}
console.log(describePerson({ name: 'Alice', age: 30 }));
//Expected Output: "Name: Alice, Age: 30"
