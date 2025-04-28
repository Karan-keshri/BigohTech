// // Recursive generic type to transform the keys of the object
// type TransformObject = ?
// Example usage:
// type MyObject = {
//   a: {
//     b: number;
//     c: {
//       d: string;
//     };
//   };
//   e: boolean;
// };

// type Transformed = TransformObject<MyObject, 'prefixed_'>;

/* 
Transformed will be:

{
  prefixed_a: {
    prefixed_b: number;
    prefixed_c: {
      prefixed_d: string;
    };
  };
  prefixed_e: boolean;
}
*/

type TransformObject<T,prefix extends string>={
    [K in keyof T as `${prefix}${Extract<K,string>}`]:
    T[K] extends Object ?
    TransformObject<T[K],prefix> :T[K];
}

type MyObject = {
    a: {
      b: number;
      c: {
        d: string;
      };
    };
    e: boolean;
  };
  
  type Transformed = TransformObject<MyObject, 'prefixed_'>;
  
  const obj :Transformed={
    prefixed_a:{
        prefixed_b:12,
        prefixed_c:{
            prefixed_d:"123"
        }
    },
    prefixed_e:true,
  }

 