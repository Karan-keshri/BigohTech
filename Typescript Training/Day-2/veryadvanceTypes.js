"use strict";
// conditional types
Object.defineProperty(exports, "__esModule", { value: true });
var value = 12345;
//value="123"; error
console.log(value);
function createLabel(nameOrId) {
    throw "unimplemented";
}
var user1 = {
    name: "Karan",
};
console.log(user1);
var user2 = {};
console.log(user2);
var user3 = {
    name: "Karan",
    age: 23
};
console.log(user3);
var user = { id: 1, name: "Alice", email: "alice@example.com" };
// user.id = 2; Not allowed to change readonly property
console.log(user);
