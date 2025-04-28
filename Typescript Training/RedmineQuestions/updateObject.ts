// const obj = { a: 1, b: 'hello', c: true };
// const updated = updateObject(obj, 'b', 'world');
// Function that takes object as first parameter and second parameter
//  of take only keys of the object provided. Also value type should be same as the original

function updateObject<T,K extends keyof T,V extends T[K]>(obj :T,key:K,value:V){
    obj[key]=value;
    //return obj;
}

const obj={
    name:"Karan",
    age :23,
}

updateObject(obj, 'name', 'John');
console.log(obj);

export {}