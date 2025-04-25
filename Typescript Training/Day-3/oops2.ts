class Animal {
    makeSound() :void{
        console.log("Animal makes sound");
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log("Dog sound is whoof")
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("cat sound is meow");
    }
}

function animalSounds(animal: Animal) {
    animal.makeSound();
}

const cat=new Cat();
const dog=new Dog();

console.log(cat instanceof Cat)

animalSounds(cat);
animalSounds(dog);


// abstract class
abstract class TakePhoto{
    camera :string;
    constructor(camera:string){
        this.camera=camera;
    }
    abstract capturePhoto():void;
}

class Instagram extends TakePhoto {
    profileName : string;
    constructor(camera : string , profileName :string){
        super(camera);
        this.profileName=profileName;
    }
    capturePhoto(): void {
        console.log("Photo captured");
    }
}

const user = new Instagram("Sony","Aman");
user.capturePhoto();

export {}