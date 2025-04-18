function flexibleCalculator(fun,...args){
    return fun(...args);
}

function add(...nums){
   return nums.reduce((a,b)=>a+b,0);
}

function subtract(a,b){
    return a-b;
}

const multiply=(...nums)=>{
    return nums.reduce((a,b)=>a*b,1);
}

const divide=(a,b)=>(a/b);

const si=(p,r,t)=>(p*r*t)/100;

const toCelsius = (f) => ((f - 32) * 5) / 9;

const areaRectangle = (l, b) => l * b;

console.log(flexibleCalculator(add, 1,2,3,4,5)); // 15
console.log(flexibleCalculator(subtract, 5, 3,45)); // 2
console.log(flexibleCalculator(multiply, 1,2,3,4,5)); // 120
console.log(flexibleCalculator(divide, 5, 3)); // 1.6666666666666667
console.log(flexibleCalculator(si, 1000, 5, 2)); // 100
console.log(flexibleCalculator(toCelsius, 32)); // 0
console.log(flexibleCalculator(areaRectangle, 5, 3)); // 15
console.log(flexibleCalculator((a,b)=>a+b, 5, 3)); // 8
