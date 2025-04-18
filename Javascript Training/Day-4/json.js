// What is JSON?
// JSON stands for JavaScript Object Notation.
// It is a lightweight data format used to store and exchange data between a server and a client (like in APIs).
// 💡 Key Features of JSON:
// It's text-based (human-readable)
// It’s language-independent (used in almost all programming languages)
// Very easy to understand if you know JavaScript objects
// It uses key-value pairs (like JavaScript objects)
// It supports arrays, strings, numbers, booleans, and null values
// It does not support functions, dates, or undefined values

// json basics syntax

// {
//     "name": "Karan",
//     "age": 25,
//     "isStudent": true,
//     "hobbies": ["coding", "music"],
//     "address": {
//       "city": "Noida",
//       "zip": "201301"
//     }
//   }

// Data is in key-value pairs
// Keys must be in double quotes
// Values can be:String ,Number, Boolean, Array, Object, null


// 1. Parsing (JSON.parse())
// Converts a JSON string into a JavaScript object.

const jsonString = '{"name":"Karan","age":25}';
const obj = JSON.parse(jsonString);

console.log(obj);       // { name: 'Karan', age: 25 }
console.log(obj.name);  // Karan
console.log(obj.age);   // 25

// 2. Stringifying (JSON.stringify())
// Converts a JavaScript object into a JSON string.
// This is useful for sending data to a server or saving it in a file.

const obj1 = { name: "Karan", age: 25 };
const jsonString1 = JSON.stringify(obj);

console.log(jsonString1); // '{"name":"Karan","age":25}'
console.log(typeof jsonString1); // string

const str = "Hello, JSON!";
const jsonStr = JSON.stringify(str);

//Json Manipulation
const jsonString2 = '{"name":"Karan","age":25,}';
let data = JSON.parse(jsonString);

// Access
console.log(data.name); // Karan

// Modify
data.age = 26;
data.city = "Delhi";

// Convert back to JSON string
const updatedJSON = JSON.stringify(data);
console.log(updatedJSON); // {"name":"Karan","age":26,"city":"Delhi"}


// Initial nested object
let student = {
    name: "Karan",
    contact: {
      email: "karan@example.com",
      phone: "1234567890"
    },
    subjects: [
      { name: "Math", marks: 90 },
      { name: "Science", marks: 85 }
    ]
  };
  
  // 1️⃣ Accessing nested properties
  console.log("Name:", student.name);                          // Karan
  console.log("Email:", student.contact.email);                // karan@example.com
  console.log("First subject name:", student.subjects[0].name); // Math
  
  // 2️⃣ Modifying nested values
  student.contact.phone = "0987654321";
  student.subjects[1].marks = 95;
  
  // 3️⃣ Adding new nested properties
  student.contact.city = "Noida";
  student.subjects.push({ name: "English", marks: 88 });
  
  //  Convert to JSON string
  const jsonString3 = JSON.stringify(student);
  console.log("Stringified:", jsonString3);
  
  //  Parse back to object
  const parsedStudent = JSON.parse(jsonString3);
  console.log("Parsed again:", parsedStudent);

  const obj12345 = {
    0: "Abhinav"
  }
  console.log(typeof obj12345)