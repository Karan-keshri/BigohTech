function simpleCalculator(num1,num2,opertor){
    let result;
    switch(opertor){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
            case '%':
            result = num1 % num2;
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}

console.log(simpleCalculator(10,5,'+')); // 15
console.log(simpleCalculator(10,5,'-')); // 5
console.log(simpleCalculator(10,5,'*')); // 50
console.log(simpleCalculator(10,5,'/')); // 2
console.log(simpleCalculator(10,5,'%')); // 0
console.log(simpleCalculator(10,5,'&')); // Invalid operator
