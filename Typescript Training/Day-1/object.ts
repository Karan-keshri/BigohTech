
interface Animal {
    name: string;
    age: number;
  }
  
  let obj2:Animal & { [key: string]: any } ={name:"Dog",age : 2}
  obj2.name="xyz";
  obj2.food="meat";
  delete obj2.food;
  console.log(obj2);


  //type alias
//   Type aliases in TypeScript create a custom name for a specific type, 
//   including object shapes.This method defines the structure and types 
//   of object properties, ensuring consistent and type-safe objects.

  type Product = {
    productId: string;
    name: string;
    price: number;
};

const laptop: Product = {
    productId: "LAP123",
    name: "Dell Inspiron",
    price: 32000,
};

console.log(laptop);


// Index Signatures
// Index signatures in TypeScript allow objects to have dynamic keys 
// with specified value types. This is useful for objects without a fixed
//  set of properties, enabling flexible and type-safe property access.

let nameAgeMap: { [index: string]: number } = {};
nameAgeMap["Jack"] = 25;
nameAgeMap["Mark"] = 30;
console.log(nameAgeMap); // { Jack: 25, Mark: 30 }


let person : {name:string ,age:Number} &{[key:string]:string | number}={name:"Karan",age:25,gender:"Male"}
console.log(person);
person.contactNo=9876543210;
console.log(person);

export{}
