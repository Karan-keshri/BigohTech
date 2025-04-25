// use of satisfies

type Colors = "red" | "green" | "blue";

const palette = {
  red: 'red',
  green: "green",
  blue: 'blue',
} satisfies Record<Colors, string>;

const redValue = palette.red; 
const greenValue = palette.green; 

console.log(redValue,greenValue);

// use of as

let s:any = "Hello World";
let t = s as string; 
console.log(typeof t);

let id :unknown= 123;
let id2= id as number;
 console.log(id2);


export {}