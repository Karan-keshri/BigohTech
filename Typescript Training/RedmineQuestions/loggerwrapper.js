// const add =(num1:number,num2:number) : number => num1+num2;
// function loggerWrapper<T extends (...args :number[])=>number>(fn :T) :any {
//     return ((...args:number[]) =>{
//         console.log(`Calling function ${fn.name} with arguments: ${args}"`)
//         return fn(...args);
//     })
// }
// const loggedAdd = loggerWrapper(add);
// const value = loggedAdd(3, 5);
// console.log(value); // 8
var add = function (num1, num2) { return num1 + num2; };
function loggerWrapper(fn) {
    return (function (num1, num2) {
        console.log("Calling ".concat(fn, " with arguments: ").concat(num1, ",").concat(num2, "\""));
        return fn(num1, num2);
    });
}
var loggedAdd = loggerWrapper(add);
var value = loggedAdd(3, 5);
console.log(value); // 8
