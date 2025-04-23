// Enums, or enumerations, provide a way to define a set of named constants in TypeScript.
//  They enhance code readability and maintainability by replacing magic numbers or strings
//   with meaningful names. TypeScript supports both numeric and string enums.
//Numeric enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
var requestStatus = StatusCodes.Success;
console.log(requestStatus, typeof requestStatus, typeof StatusCodes); // Output: 200
//string enums
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
var responseType = Status.Pending;
console.log(responseType); // Output: application/json
// Heterogeneous Enums
var user;
(function (user) {
    user["name"] = "Karan";
    user[user["id"] = 123] = "id";
})(user || (user = {}));
var person1 = user.name;
console.log(person1);
//Auto increment
var week;
(function (week) {
    week[week["Sun"] = 1] = "Sun";
    week[week["Mon"] = 2] = "Mon";
    week[week["Tue"] = 3] = "Tue";
    week[week["Wed"] = 4] = "Wed";
    week[week["Thu"] = 5] = "Thu";
    week[week["Fri"] = 6] = "Fri";
    week[week["Sat"] = 7] = "Sat";
})(week || (week = {}));
var day = week.Wed;
console.log(day);
// Reverse Mapping
// Numeric enums in TypeScript support reverse mapping, allowing you to access 
// both the value of a member from its name and the name of a member from its value.
//  This is possible because TypeScript generates an object that maps both
//  ways for numeric enums. String enums do not support reverse mapping.
var displayId;
(function (displayId) {
    displayId[displayId["id1"] = 1] = "id1";
    displayId["id2"] = "abc";
})(displayId || (displayId = {}));
console.log(displayId.id2);
console.log(displayId[2]);
