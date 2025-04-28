function identity(args) {
    return args;
}
//if i have to return string and args is also string then i have to redefine another function
// this is here generics is useful
function identity2(arg) {
    return arg;
}
var output = identity2("myString");
console.log(output);
var output2 = identity2(10);
console.log(output2);
function getSearchProducts(product) {
    //operations
    return product[0];
}
var getSearchProducts2 = function (product) {
    //operations
    return product[1];
};
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//let displayArray=loggingIdentity<number>([1,2,3,4,5]);
console.log(loggingIdentity([1, 2, 3, 4, 5]));
var SellCourse = /** @class */ (function () {
    function SellCourse() {
        this.cart = [];
    }
    SellCourse.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    SellCourse.prototype.displayCart = function () {
        console.log(this.cart);
    };
    return SellCourse;
}());
var course1 = {
    name: "ts",
    subject: " ts sub"
};
var course2 = {
    name: "js",
    subject: " js sub"
};
var quiz = {
    name: "Quiz1",
    type: "Ts"
};
var sc = new SellCourse();
var quizSC = new SellCourse();
sc.addToCart(course1);
sc.addToCart(course2);
quizSC.addToCart(quiz);
sc.displayCart();
//quizSC.displayCart();
