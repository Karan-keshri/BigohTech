type nested ={
    name : string,
    age: number,
    add :{
        location : string,
        city :string
        addDetails :{
            houseNo :12
        }
    }
  }
  
  type NestedNullable<T> ={
    [K in keyof T] : K extends Object ?
    NestedNullable<T[K]|null>
    : T[K]|null;
  }

  const nestedObj :NestedNullable<nested>={
    name :"shiv",
    age: null,
    add :{
        location :"sec-15",
        city :null,
        addDetails :{
            houseNo :null
        }
    }
  }

  type NestedRequired<T>={
    [K in keyof T] -?: K extends Object ?
    NestedRequired<T[K] >
    : T[K]
  }

  type NestedOptional ={
    name ?: string,
    age ?: number,
    add ?:{
        location ?: string,
        city ?:string,
        addDetails ?:{
            houseNo ?:12
        }
    }
  }

  const nestedRequiredObj :NestedRequired<NestedOptional>={
    name:"abc",
    age :12,
    add :{
        location :"qwert",
        city :"qwe",
        addDetails :{
            houseNo :12
        }
    }
  }

  type NestedPartial<T>={
    [K in keyof T] ?: K extends Object ?
    NestedPartial<T[K]> 
    : T[K];
  }

  const nestedPartial :NestedPartial<nested>={
    name : "abc"
  }

  type nestedOmit<T ,key extends any> ={
    [K in keyof T as K extends key ? never : K] : T[K] extends Object ?
    nestedOmit<T[K],key> 
    : T[K]
  }

const newObj:nestedOmit<nested,'add'|'addDetails'> ={
    name: "qe",
    age :13,
    // add :{
    //     location:"1",
    //     city :"qw",
        
    // }
}

type nestedPick<T, key extends any>={
    [K in keyof T as K extends key ? K : never]: K extends Object ?
    nestedPick<T[K],key>
    : T[K];
}

const pickObj :nestedPick<nested,'name'&'addDetails'>={
    name :"asd",
    addDetails :{
        houseNo :12
    }
}

console.log(pickObj);

  type NestedNonNullable<T> ={
    [K in keyof T] : T[K] extends Object ? 
    NestedNonNullable<NonNullable<T[K]>> 
    : NonNullable<T[K]>
  }

  type CustomExclude<T,V> =T extends V ? never : T;

  type CustomExtract<T ,V> = T extends V ? T :never;