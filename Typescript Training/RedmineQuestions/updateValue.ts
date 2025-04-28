// function updateValuesWithPrefix(obj, prefix){
//   return obj;
// }

// Example usage
// const obj = {
//   name: "Alice",
//   age: 30,
//   address: {
//     city: "Wonderland",
//     zip: 12345,
//     location: {
//       country: "Fantasy",
//     },
//   },
//   isActive: true,
// };

// const updatedObj = updateValuesWithPrefix(obj, "Hello, ");

// console.log(updatedObj);

/*
Output:
{
  name: "Hello, Alice",
  age: 30,
  address: {
    city: "Hello, Wonderland",
    zip: 12345,
    location: {
      country: "Hello, Fantasy",
    },
  },
  isActive: true,
}
*/

function updateValuesWithPrefix<T>(obj:T ,prefix:string) : T{
    const result :any={};
    for(let key in obj){
        if(typeof obj[key]==='object'){
            result[key]=updateValuesWithPrefix(obj[key],prefix)
        }
        else if(typeof obj[key] ==='string'){
            result[key]=prefix+obj[key];
        }
        else{
            result[key]=obj[key];
        }
    }
    return result;
}

const obj = {
    name: "Alice",
    age: 30,
    address: {
      city: "Wonderland",
      zip: 12345,
      location: {
        country: "Fantasy",
      },
    },
    isActive: true,
  };

const updatedObj = updateValuesWithPrefix(obj, "Hello, ");

console.log(updatedObj);

export {}