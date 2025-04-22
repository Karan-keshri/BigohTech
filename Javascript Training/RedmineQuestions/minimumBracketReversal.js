function countMinReversals(expression) {
    const len = expression.length;

    if (len % 2 !== 0) return -1;

    const stack = [];

    for (let ch of expression) {
        if (ch === '{') {
            stack.push(ch);
        } else { 
            if (stack.length && stack[stack.length - 1] === '{') {
                stack.pop(); 
            } else {
                stack.push(ch);
            }
        }
    }

    let open = 0, close = 0;
    for (let ch of stack) {
        if (ch === '{') open++;
        else close++;
    }

    return Math.floor((open + 1) / 2) + Math.floor((close + 1) / 2);
}

const expression1 = "{{{{{{}{}}}}";
console.log(countMinReversals(expression1));  // Output: 1

const expression2 = "{{{";
console.log(countMinReversals(expression2));  // Output: -1
