// Write a type guard function that checks if a value is an instance of a class Dog.
//  Then, create a function that takes an array of mixed objects and returns only the objects that are instances of Dog.

// const animals = [new Dog(), new Cat(), new Dog()];
// console.log(filterDogs(animals));
// Output: [Dog, Dog]

class Animal {
    name :string;
    isLive():void {
        console.log("Animal is live")
    }
}
class Dog{
    name :string;
    // constructor(name:string){
    //     this.name=name;
    // }
    isLive():void {
        console.log("Animal is live")
    }
}

class Cat {
    name:string;
    // constructor(name:string){
    //     this.name=name;
    // }
    isLive():void {
        console.log("Animal is live")
    }
}

function filterDogs(obj : (Dog | Cat | Animal)[]) : Dog[]{
    let dog : Dog[] =obj.filter((curAnimal )=>{
        if(curAnimal instanceof Dog) return curAnimal;
    });
    return dog;
}

const animals = [new Dog(), new Cat(), new Dog(),new Animal()];
console.log(filterDogs(animals));