var person = { name: "Karan", age: 25, gender: "Male" };
console.log(person);
person.contactNo = 9876543210;
console.log(person);
var obj2 = { name: "Dog", age: 2 };
obj2.name = "xyz";
obj2.food = "meat";
delete obj2.food;
console.log(obj2);
var laptop = {
    productId: "LAP123",
    name: "Dell Inspiron",
    price: 32000,
};
console.log(laptop);
// Index Signatures
// Index signatures in TypeScript allow objects to have dynamic keys 
// with specified value types. This is useful for objects without a fixed
//  set of properties, enabling flexible and type-safe property access.
var nameAgeMap = {};
nameAgeMap["Jack"] = 25;
nameAgeMap["Mark"] = 30;
console.log(nameAgeMap); // { Jack: 25, Mark: 30 }
