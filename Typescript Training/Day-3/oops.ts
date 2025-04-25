class Person {
    name :string;
    age : number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getPersonDetails(): void{
        console.log(`Name of employee is ${this.name} age is ${this.age}`);
    }
}

// const person=new Person("John",123);
// person.getPersonDetails();

class Employee extends Person{
    salary : number
    constructor(name:string,age:number,salary :number){
        super(name,age);
        this.salary=salary;
    }
    getEmployeeDetails():void{
        console.log(`name - ${this.name} age - ${this.age} salary - ${this.salary}`);
    }
}

const emp=new Employee("John",23,12345.567);
emp.getEmployeeDetails();

