// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { b: { d: 3 }, e: 4 };
// const merged = deepMerge(obj1, obj2);
// Merged should have type { a: number; b: { c: number; d: number; }; e: number; }

// Challenge1: If object have a same key with different value type, then it should persist the type of second object key value which is passed as parameter
// Challenge2: Give type error if not of same primitive type.


function deepMerge<T,U>(obj1:T,obj2:U):T{
    const result :any={...obj1};

    for(const key in obj2){
        if(key in result && typeof result[key]==='object'
            && typeof obj2[key]==='object'
        ){
            result[key]=deepMerge(result[key],obj2[key]);
        }
        else {
            result[key]=obj2[key];
        }
    }
    return result;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

const merged = deepMerge(obj1, obj2);
console.log(merged);
