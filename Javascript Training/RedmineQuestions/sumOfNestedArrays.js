function sumNestedArray(arr) {
    return arr.reduce((sum, item) => {
      if (Array.isArray(item)) {
        return sum + sumNestedArray(item); // recursively call for nested array
      } else if (typeof item === 'number') {
        return sum + item;
      } else {
        return sum; // ignore non-numbers
      }
    }, 0);
  }
  
  console.log(sumNestedArray([1, [2, [3, 4]], 5])); // Output: 15
  