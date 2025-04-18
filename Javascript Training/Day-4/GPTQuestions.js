// 🟢 Basic Level (4 Questions)
// 1. Parse a JSON string and log a specific property:

// Given the JSON string:
const jsonStr = '{"name": "Alice", "age": 25}';
// Parse it and log the name.

const obj=JSON.parse(jsonStr);
console.log(obj.name);

// 2. Convert a JavaScript object into a JSON string and log the result:

const user = {
  id: 1,
  username: "techie",
  email: "techie@example.com"
};
// Convert it into JSON string and log it.

const jsonstring=JSON.stringify(user);
console.log(jsonstring);

// 3. Access and modify a property in the JSON object:

let book = {
  title: "JS Basics",
  author: "John Doe",
  pages: 120
};
// Change the title to "Advanced JS" and log the updated object.
book.title="Advanced JS";
const jsonobj=JSON.stringify(book);
console.log(jsonobj);

// 4. Create a class Person with a constructor and an instance method sayHello() that logs "Hello, I am [name]":

class person{
    constructor(name){
        this.name=name;
    }
    sayHello(){
        console.log(`Hello,I am ${this.name}`);
    }
}
const p1=new person("Karan");
p1.sayHello();


// 5. Access a nested property and modify it:

const order = {
  id: 101,
  customer: {
    name: "Jane",
    address: {
      street: "Main Street",
      city: "New York"
    }
  }
};
// Change the city to "Los Angeles" and log the result.
order.customer.address.city="Los Angeles";

console.log(order);

// 6. Create a class Rectangle with width and height, and a method area() that returns area.
//  Add a static method isSquare() that returns true if width === height:

// Test the static method with a square and a rectangle

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }
    static isSquare(rectangle){
        return rectangle.width===rectangle.height;
    }
}

const rect=new Rectangle(5,5);
console.log(rect.area());
console.log(Rectangle.isSquare(rect));


// 7. Store and retrieve an object from local storage:

const settings = {
  theme: "dark",
  fontSize: "16px"
};
// Save this in localStorage and then retrieve and log it as an object
const jsondata=JSON.stringify(settings);
localStorage.setItem("setting",jsondata);
const retrievedData = localStorage.getItem("setting");
const object = JSON.parse(retrievedData);
console.log(object);

// 8.
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 20 },
    { id: 3, name: "Charlie", age: 28 }
  ];
  // Update Bob's age to 30 and log the updated array
  users[1].age=30;
  console.log(users);

  // 9.  9. Add a new user to the users array and log the updated array

const abc = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 }
];
abc.push({ id: 4, name: "David", age: 22 });

console.log(abc);
 
// ✅ 10. Fetch user data using async/await and log the first user’s name
async function getData() {
    try {
      const response = await fetch('url');
      const data = await response.json();
      console.log('Data is :', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getData();
  