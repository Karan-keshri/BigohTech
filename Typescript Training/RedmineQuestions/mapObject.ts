// const originalObject = { a: 1, b: 2, c: 3 };
// const mappedObject = mapObject(originalObject, (value) => value.toString());
// MappedObject should be and have same type

// { a: '1', b: '2', c: '3' }

function mapObject<T extends Record<string, number>, U>(obj: T,
    callback: (value: T[keyof T]) => U
  ): Record<string, U> {
    const result: Record<string, U> = {};
  
    for (const key in obj) {
      result[key] = callback(obj[key]);
    }
  
    return result;
  }


  const originalObject = { a: 1, b: 2, c: 3 };

// const mappedObject = mapObject(originalObject, (value) => {
//   return value * 2; 
// });
const mappedObject = mapObject(originalObject, (value) => value.toString());


console.log(mappedObject);
