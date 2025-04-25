
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

// function modify(object,k){
// for(let key in object){
//     if(key===k){
//         object[key] : 
//     }
// }
// }
  
  export {}