interface person {
    name :string,
    age: number
};

interface employee extends person {
    salary : number;
}

let employee1 :employee ={
    name :"Karan",
    age : 23,
    salary : 12345
}

console.log(employee1);

type emp ={
    name : string,
    age:number
}
type emp2= {
    salary :number;
}

let person : emp &emp2 ={
    name : "Xyz",
    age :12,
    salary :123
}

console.log(person);

// interface with class types

interface shape {
    getArea() :number;
}

class circle implements shape{
    radius :number;
    constructor(radius :number) {
        this.radius=radius;
    }
    getArea(){
        return 3.14*this.radius*this.radius;
    }
}

let areaOfCircle=new circle(10);
console.log(areaOfCircle.getArea());

export {}