// Description
// A function to access object property value
// Parameters are object and key name, key name is restricted to object keys
// Return type is be accessed object value.
// Challenge1 : Flat level object
// const value = flatGet(user, 'name');
// Challenge2 : Nested Object
// const value = deepGet(obj, 'foo.bar.baz');
// const value = deepGet(obj, ['foo','bar','baz'];
var obj = {
    name: "Karan",
    age: 23
};
var result = getValue(obj, "name");
console.log(result);
function getValue(obj, key) {
    return obj[key];
}
// challenge 2
// For nested objects
function deepGet(obj, path) {
    if (typeof path === 'string') {
        path = path.split('.');
    }
    return path.reduce(function (current, key) {
        return current[key];
    }, obj);
}
// Example usage:
var nestedObj = {
    foo: {
        bar: {
            baz: 'Hello World'
        }
    }
};
// Using dot notation string
console.log(deepGet(nestedObj, 'foo.bar.baz')); // 'Hello World'
// Using array path
console.log(deepGet(nestedObj, ['foo', 'bar', 'baz'])); // 'Hello World'
