// Pass by Value vs Pass by Reference in JavaScript
// This concept tells us how data is passed into functions or assigned to variables
//  — either as a copy of the value or a reference to the original.

let a = 10;
let b = a; // b gets a copy of 10

b = 20;

console.log(a); // 10
console.log(b); // 20


let obj1 = { name: "Karan" };
let obj2 = obj1; // obj2 refers to the same object

obj2.name = "Aryan";

console.log(obj1.name); // Aryan 


//pass by value primitive types
function changeValue(val) {
    val = 99;
  }
  
  let num = 10;
  changeValue(num);
  
  console.log(num); // 10 ❌ not changed


  //Pass by Reference (Object):
  function changeObject(obj) {
    obj.name = "Changed";
  }
  
  let person = { name: "Karan" };
  changeObject(person);
  
  console.log(person.name); // Changed 
  
  
  