    let count = 0;

    function ways(arr,index, currentSum,target) {
        if (index === arr.length) {
            return;
        }
        if (currentSum === target) count++;
        console.log(currentSum, target, count);

        ways(arr,index + 1, currentSum + arr[index],target);

        ways(arr,index + 1, currentSum - arr[index],target);

        return count;
    }

    
   


const arr = [-1, 9, 8, -3, 4];
const target = 5;

console.log(ways(arr,0, 0,target)); // Output: 8
