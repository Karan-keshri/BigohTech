type Reverse<T extends any[]> = 
    T extends [infer first, ...infer remaining] 
        ? [...Reverse<remaining>,first] 
        : [];

// Example Usage
type MyTuple = [number, string, boolean];
type ReversedTuple = Reverse<MyTuple>; // [boolean, string, number]

let arr:MyTuple=[1,"Karan",true]

let arr2:ReversedTuple=[true,"Karan",1]

export {}