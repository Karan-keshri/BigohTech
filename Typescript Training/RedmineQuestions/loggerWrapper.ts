const add =(num1:number,num2:number) : number => num1+num2;

function loggerWrapper<T extends (...args :number[])=>number>(fn :T) :any {
    return ((...args:number[]) =>{
        console.log(`Calling ${fn} with arguments: ${args}"`)
        return fn(...args);
    })
}

const loggedAdd = loggerWrapper(add);
const value = loggedAdd(3, 5);

console.log(value); // 8

// const add =(num1:number,num2:number) : number => num1+num2;

// function loggerWrapper<T extends (num1:number,num2:number)=>number>(fn :T) :(num1:number,num2:number)=>number {
//     return ((num1:number,num2:number):number =>{
//         console.log(`Calling ${fn} with arguments: ${num1},${num2}"`)
//         return fn(num1,num2);
//     })
// }

// const loggedAdd = loggerWrapper(add);
// const value = loggedAdd(3, 5);

// console.log(value); // 8
export {}