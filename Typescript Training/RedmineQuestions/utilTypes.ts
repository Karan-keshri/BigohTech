// make required every properties and remove null
interface User {
    age?: number;
    name: string | null;
  }

  type RequiredAll =Required<User>

  type DefineProperties<T> = {
    [K in keyof T]:NonNullable<T[K]>;
  };

  type DefineExample = DefineProperties<RequiredAll>;

  const obj:DefineExample  ={
    name: "abc",
    age:23
  }

  
  // challenge 2 for nested oobject
  type NestedObj={
    name:string ,
    age ?:number | null,
    address :{
        location :string,
        city ?:string | null
    }
  }

//   type NestedRequiredAll<T> ={
//     [K in keyof T] -?: T[K] extends Object ?
//     NestedRequiredAll<T[K]> :T[K];
//   }

  const nestedObj : DefineNestedProperties<NestedObj>={
    name :"shiv",
    age: 13,
    address :{
        location :"sec-15",
        city :"Noida"
    }
  }

  type DefineNestedProperties<T> ={
    [K in keyof T] -?: T[K] extends Object ? 
    DefineNestedProperties<NonNullable<T[K]>> 
    : NonNullable<T[K]>
  }


// type changeProperty<T, key extends keyof T> ={
//     [K in keyof T] : K extends key ? 
//     (T[K]|null) : T[K];
// } & { [K in key] -?: T[K]| null}

// interface abc{
//     a ?:string;
//     b :number;
//     c ?:string;
// }

// const my :changeProperty<abc,'a'>={
//     a:null,
//     b :13,
//     c:'12'
// }


  
  export {}
