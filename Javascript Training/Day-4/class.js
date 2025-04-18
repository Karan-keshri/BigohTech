// class Person {
//     constructor(name, age) {
//       this.name = name; // property
//       this.age = age;   // property
//     }
//   }

    class Car {
        wheels = 4; // default property (like instance variable)
      
        constructor(brand) {
          this.brand = brand; // 'this' refers to the current Car instance
        }
      
        carDetails() {
          console.log(`${this.brand} car has ${this.wheels} wheels.`);// using 'this' to access instance property
        }
      }
      
      const car1 = new Car("Toyota");
      car1.carDetails(); // Toyota car has 4 wheels.



      // Inheritnce

        class vehicle{
            constructor(type){
                this.type=type;
            }
            vehicleDetails(){
                console.log(`Vehicle type is ${this.type} wheeler`);
            }
        }

        class Bus extends vehicle{
            constructor(type,brand){
                super(type);
                this.brand=brand;
            }
            brandDetails(){
                console.log(`Brand is ${this.brand}`);
            }
        }

        const bus1=new Bus(6,"Toyota");
        bus1.vehicleDetails(); // This is a Bus vehicle
        bus1.brandDetails(); // This is a Toyota bus



        class person{
            #name;
            constructor(name){
                this.#name=name;
            }
            get getName(){
                return this.#name;
            }


            set setName(newName){
                this.#name=newName;
            }
        }

        const person1=new person("Karan");
       // console.log(person1.#name);
        console.log(person1.getName); // Karan
        person1.setName= "Abhinav"
        console.log(person1.getName); // Aryan

        
        // Static method

        class MathUtil {
            static square(x) {
              return x * x;
            }
          
            static add(a, b) {
              return a + b;
            }

            static subtract (a,b) {
                return a-b;
            }
          }
          
          console.log(MathUtil.square(5)); // 25
          console.log(MathUtil.add(3, 7)); // 10
          console.log(MathUtil.subtract(100,10)); //90

          