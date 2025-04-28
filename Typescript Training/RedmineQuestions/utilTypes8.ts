// Create a utils type NullabelProperties that takes object and make every property to be also null

//Challenge one -> Single level object type
//Challenge two -> Nested object type

// interface User {
//     age: number;
//     name: string;
// }

// type NullableExample = NullabelProperties<Example>;
// Should infer NullableExample as { age: number|null ; name: string|null; }

interface User {
    age: number;
    name: string;
  }

type NullabelProperties<Type> = {
     [K in keyof Type]: Type[K] | null 
    };

  const obj:NullabelProperties<User> ={
    name: "abc",
    age : null
  }


  // challenge 2 for nested 
  type nested ={
    name : string,
    age: number,
    add :{
        loaction : string,
        city :string
    }
  }

  type NestedNullable<Type> ={
    [K in keyof Type] : Type[K] extends Object ?
    NestedNullable<Type[K]|null> : Type[K] |null
  }

  const obj2 :NestedNullable<nested> ={
    name :null,
    age:123,
    add :{
        loaction:null,
        city:'sd'
    }
  }

  export {}
  