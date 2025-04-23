console.log("Hello World");
// primitive type number string boolean,null,undefined,bigInt,symbol
// Primitive types
// let str: string = "hello";
// let num: number = 10;
// let bool: boolean = true;
// let nullValue: null = null;
// let undef: undefined ;
// let sym: symbol = Symbol("unique");
// let big: bigint = 12345678901234567890n;

//syntax - let variableName : type =value


let greetings:string ="Hello Karan";
console.log(greetings.toLowerCase());
console.log(greetings);

// No type annotation needed -- 'myName' inferred as type 'string'
var myName = "Alice";

let myNum :number =10.55;
console.log(myNum.toFixed(1));

const id=123;
console.log(id);

let isLogged : Boolean =true;
console.log(isLogged);


//Reference type Array,object,tuple,Enum,function,class,interface
//Reference type Array,object,tuple,Enum,function,class,interface
// let items: string[] = ['apple', 'banana'];
// let point: [number, number] = [10, 20]; // Tuple
// let arr :number[]=[1,2,3,4,5]
// let anything: any = 42;


let obj: object = { name: "John", age: 30}
console.log(obj);

const obj3:{name:string,age:number}={name:"karan",age:24}
obj3.name="Karan Keshri";
console.log(obj3.name);

let arr: number[] = [1, 2, 3];
console.log(arr);

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5,7));


class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person1=new Person("Karan");
console.log(person1.name);


interface Animal {
  name: string;
  age: number;
}

let obj2:Animal & { [key: string]: any } ={name:"Dog",age : 2}
obj2.name="xyz";
obj2.food="meat";
console.log(obj2);


let tup: [string, number] = ["hello", 10];
console.log(tup,tup[0],tup[1]);

let hero;

function getHero(){
    return "Superman";
}
hero=getHero();
console.log(hero);

function getNum(){
    return 10;
}

hero=getNum();

console.log(hero);


export {}