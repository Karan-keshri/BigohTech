// Function that will take first parameter a object and 
// second one a object with new properties name to be updated. 
// When it typing the second argument it should give suggestion.
function transformKeys(obj, record) {
    var newObj = {};
    for (var key in obj) {
        if (record[key]) {
            newObj[record[key]] = obj[key];
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
var user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
};
var transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' });
console.log(transformUser);
