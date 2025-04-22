// Handle the following cases for all the calculation methods implemented.
// 1. When the argument provided is Not a number. (ex-string).
// 2. Number of parameters is less or more than the number of arguments.
// 3. Using a variable that is not declared.
// 4. Using a variable that is not initialized.

// Note:
// When validation fails return a statement why the following action is not executable.
// Make a single function for validation check, covering all scenarios whether it be a negative number or not a number or a zero etc

function validateInput(...args) {
    if (args.length < 2) {
        return "Error: Not enough arguments provided.";
    }
    if (args.length > 2) {
        return "Error: Too many arguments provided.";
    }
    for (let i = 0; i < args.length; i++) {
         if (args[i] === undefined) {
            return `Error: Argument ${i + 1} is not initialized.`;
        }
       else if (typeof args[i] !== 'number') {
            return `Error: Argument ${i + 1} is not a number.`;
        }
    }
    return "Valid Input"; 
}
let a,b;
console.log(validateInput(1,2));
console.log(validateInput(1,2,3));
console.log(validateInput(1,"2"));
console.log(validateInput(a,2));
