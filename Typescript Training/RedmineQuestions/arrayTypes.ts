// Write a function that takes an array of numbers and returns a new array 
// where each number is doubled. Use TypeScript to define the function's parameter and return type.

function doubleArray(arr :number[]) : number[]{
   return arr.map((num:number)=> num*2)
}

console.log(doubleArray([1, 2, 3]));
//Output: [2, 4, 6]