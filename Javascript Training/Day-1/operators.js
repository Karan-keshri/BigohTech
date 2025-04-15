/* Arithmetic operator
Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation 
/	        Division
%	        Modulus (Remainder)
++	        Increment
--	        Decrement
  
*/

let num1=10;
let num2=2;

let sum=num1+num2; // Addition
console.log("Addition: "+sum); // Output: 12

let diff=num1-num2; // Subtraction
console.log("Subtraction: "+diff); // Output: 8

let product=num1*num2; // Multiplication
console.log("Multiplication: "+product); // Output: 20

let quotient=num1/num2; // Division
console.log("Division: "+quotient); // Output: 5

let remainder=num1%num2; // Modulus (Remainder)
console.log("Modulus: "+remainder); // Output: 0

let exponent=num1**num2; // Exponentiation (ES2016)
console.log("Exponentiation: "+exponent); // Output: 100

let increment=num1++; // Increment
console.log("Increment: "+increment); // Output: 10
increment=num1; // Increment
console.log("Increment: "+increment); // Output: 11

let decrement=num2--; // Decrement
console.log("Decrement: "+decrement); // Output: 2
decrement=num2; // Decrement
console.log("Decrement: "+decrement); // Output: 1

/*
 Assignment Operators
 Assignment operators are used to assign values to variables.
 They can also perform arithmetic operations and assign the result to the variable.

Operator	Example	  Same As
=	         x = y	  x = y
+=	         x += y	  x = x + y
-=	         x -= y	  x = x - y
*=	         x *= y	  x = x * y
/=	         x /= y	  x = x / y
%=	         x %= y	  x = x % y
**=	        x **= y	  x = x ** y
*/
let x=10;
let y=5;
x=y; // Assignment

x+=y; // Addition Assignment
console.log("Addition Assignment: "+x); // Output: 10

x-=y; // Subtraction Assignment
console.log("Subtraction Assignment: "+x); // Output: 5

x*=y; // Multiplication Assignment
console.log("Multiplication Assignment: "+x); // Output: 25

x/=y; // Division Assignment
console.log("Division Assignment: "+x); // Output: 5

x%=y; // Modulus Assignment
console.log("Modulus Assignment: "+x); // Output: 0

x**=y; // Exponentiation Assignment
console.log("Exponentiation Assignment: "+x); // Output: 0


//Comparison Operators
//(==, ===, !=, !==, >, <, >=, <=)
// Comparison operators are used to compare two values and return a boolean value (true or false).
console.log(5 == "5");  // true (loose)
console.log(5 === "5"); // false (strict)
console.log(5 > 2);     // true
console.log(5 < 2);     // false
console.log(5 >= 5);    // true
console.log(5 <= 2);    // false
console.log(5 != "5");  // false (loose)
console.log(5 !== "5"); // true (strict)
console.log(5 != 5);   // false (loose)
console.log(5 !== 5); // false (strict)

//Logical Operators
//(&&, ||, !,??)
// Logical operators are used to combine multiple boolean expressions and return a boolean value.

console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true);         // false (NOT)
console.log("hi" && 123);    // 123 (AND)
console.log("hi" || 123);    // hi (OR)

let x1 = null;
let y1 = "Hello";
console.log(x1 ?? y1); // Hello (Nullish Coalescing Operator)(if it is null or undefined then take right side value)