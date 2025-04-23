// Enums, or enumerations, provide a way to define a set of named constants in TypeScript.
//  They enhance code readability and maintainability by replacing magic numbers or strings
//   with meaningful names. TypeScript supports both numeric and string enums.

//Numeric enums
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

let requestStatus: StatusCodes = StatusCodes.Success;
console.log(requestStatus,typeof requestStatus,typeof StatusCodes); // Output: 200


//string enums
enum Status {
    Success = 'SUCCESS',
    Failure = 'FAILURE',
    Pending = 'PENDING'
}

let responseType: Status = Status.Pending;
console.log(responseType) // Output: application/json

// Heterogeneous Enums

enum user {
    name="Karan",
    id=123
}

let person1 :user =user.name;
console.log(person1);


//Auto increment
enum week {
    Sun=1,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

let day :week =week.Wed;
console.log(day);

// Reverse Mapping
// Numeric enums in TypeScript support reverse mapping, allowing you to access 
// both the value of a member from its name and the name of a member from its value.
//  This is possible because TypeScript generates an object that maps both
//  ways for numeric enums. String enums do not support reverse mapping.

enum displayId {
    id1=1,
    id2,
    id3,
    id4
}
console.log(displayId.id2);
console.log(displayId[2]);
