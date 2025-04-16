let person = {
    fullName : "Karan Keshri" ,
    age : 25,
}

console.log(person.fullName); // Karan Keshri
console.log(person.age); // 25
console.log(person); // { fullName: 'Karan Keshri', age: 25 }
console.log(person["fullName"]); // Karan Keshri
console.log(person["age"]); // 25


// - Modifying Properties
// - Adding and Deleting Properties

let car = {
    brand: "Honda",
    year: 2022
  };
  
  // Add
  car.color = "black";
  
  // Update
  car.year = 2023;
  
  // Delete
  delete car.brand;
  
  console.log(car); // { year: 2023, color: 'black' }

  // - Nested Objects
let student = {
    name: "Karan",
    age: 25,
    address: {
      city: "Greater Noida",
      state: "UP"
    },
    college :{
        name :"GCET",
        location : "Greater Noida"
        }
  };

    console.log(student.address.city); // Greater Noida
    console.log(student["address"]["state"]); // UP
    console.log(student.college.location); // Greater Noida
    console.log(student.college.name); // GCET
    console.log(student["college"]["name"]); // GCET



    // -  Object Methods (Built-in)
    // 1. Object.keys(obj) ->Returns an array of all keys.
    
console.log(Object.keys(person)); // [ 'fullName', 'age' ]

// 2. Object.values(obj) ->Returns an array of values.
console.log(Object.values(person)); // [ 'Karan Keshri', 25 ]

// 3. Object.entries(obj) ->Returns an array of key-value pairs.
console.log(Object.entries(person)); // [ [ 'fullName', 'Karan Keshri' ], [ 'age', 25 ] ]

// 4. Object.assign(target, ...sources) ->Copies values from one or more source objects to a target object.
let source1 = { a: 1, b: 2 };
let source2 = { c: 3, d: 4 };
let source3 = { e: 5, f: 6 };
let result=Object.assign({}, source1, source2, source3); // Merges all sources into a new object
console.log(result); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

let target = { a: 1 };
let source = { b: 2, c: 3 };
let merge=Object.assign(target, source); // Merges source into target
console.log(merge); // { a: 1, b: 2, c: 3 }
console.log(target); // { a: 1, b: 2, c: 3 } (target is modified)

// 5. Object.freeze(obj) ->Prevents modification of an object (makes it immutable).
let object = { a: 1 };
Object.freeze(object);
object.a = 10; // ❌ won't change
object.b = 2; // ❌ won't add
delete object.a; // ❌ won't delete
console.log(object); 


//6. Object.seal(obj) ->Prevents adding or removing properties but allows modification of existing properties.
let obj = { a: 1 };
Object.seal(obj);
obj.a = 5; // ✅ allowed
obj.b = 10; // ❌ not added
delete obj.a; // ❌ not allowed
console.log(obj); // { a: 5 }
console.log(obj.a); // 5
console.log(obj.b); // undefined (not added)


// 7. object hasOwnProperty(property) ->Checks if the object has the specified property as its own (not inherited).
console.log(person.hasOwnProperty("fullName")); // true
console.log(person.hasOwnProperty("toString")); // false (inherited from Object prototype)
console.log(person.hasOwnProperty("age")); // true
console.log(person.hasOwnProperty("address")); // false

  