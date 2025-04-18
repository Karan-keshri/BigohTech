function add(...nums){
    return nums.reduce(function(a,b){
        return a+b;
    },0);
}
    
console.log(add(9,4,12,16,23,43)); // 107
console.log(add(1,2,3,4,5)); // 15

