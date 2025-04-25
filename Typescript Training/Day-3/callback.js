var add = function (num1, num2) {
    return num1 + num2;
};
var sub = function (num1, num2) { return num1 - num2; };
function operation(fn, num1, num2) {
    var result = fn(num1, num2);
    console.log(result);
}
operation(add, 10, 20);
operation(sub, 100, 10);
function message(mesg, delay, fn) {
    console.log("Start");
    setTimeout(function () {
        console.log(mesg);
        fn();
    }, delay);
    fn();
}
function fn() {
    console.log("end");
}
message("Hello", 2000, fn);
