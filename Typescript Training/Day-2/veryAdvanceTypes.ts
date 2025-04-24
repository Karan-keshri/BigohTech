// conditional types

interface animal {
    live() :void
}

interface dog extends animal {
    bark() :void
}

type example1= dog extends animal ? number : string;

let value : example1 =12345;
//value="123"; error

console.log(value);

// interface IdLabel {
//     id: number;
//   }
//   interface NameLabel {
//     name: string;
//   }
   
//   function createLabel(id: number): IdLabel;
//   function createLabel(name: string): NameLabel;
//   function createLabel(nameOrId: string | number): IdLabel | NameLabel{
//     throw "unimplemented"
//   }
  //createLabel(123);

  // mapped types
  // Mapped types in TypeScript allow you to create new types
  //  by transforming the properties of existing types. 
// They are particularly useful for creating variations of types
//  without manually redefining each property.

  type user ={
    name : string;
    age : number;
    id : number;
  };

  type partialUser ={
    [k in keyof user]? :user[k];
  };

const user1:partialUser={
    name : "Karan",
}
console.log(user1);

const user2 :partialUser ={};
console.log(user2);

const user3 : partialUser ={
    name :"Karan",
    age : 23
}  
console.log(user3);

type User = {
    id: number;
    name: string;
    email: string;
  };
  
  type ReadonlyUser = {
    readonly [P in keyof User]: User[P];
  };
  
  const user: ReadonlyUser = { id: 1, name: "Alice", email: "alice@example.com" };
  // user.id = 2; Not allowed to change readonly property

  console.log(user);
  
// template literal
type hello= "Hello";
 type greeting= `${hello} world`;


type Color = "red" | "blue" | "green";
type Shade = "light" | "dark";

type ColorShade = `${Shade} ${Color}`;

const lightRed: ColorShade = "light red";
const darkBlue: ColorShade = "dark blue";


export {}