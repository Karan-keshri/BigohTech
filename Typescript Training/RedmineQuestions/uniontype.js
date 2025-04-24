// Create a function that takes a parameter which can either be a string or a number.
//  The function should return the parameter as a string.
function stringify(para) {
    return "\"".concat(para, "\"");
}
console.log(stringify(123));
//Output: "123"
console.log(stringify('hello'));
//Output: "hello"
