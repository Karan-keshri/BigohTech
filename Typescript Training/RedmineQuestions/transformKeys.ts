// Function that will take first parameter a object and 
// second one a object with new properties name to be updated. 
// When it typing the second argument it should give suggestion.

// const user = {
//     firstName: "Tony";
//     lastName: "Stark";
//     age: 54;
// }

// const transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' })
// Should give return type as

// {
//     first: string;
//     last: string;
//     age: number;
// }

function transformKeys<T,R extends Record<string,string>>(obj:T,record:R) : any {
    const newObj : any={};
    for(let key in obj){
        if(record[key]){
            newObj[record[key]]=obj[key];
        }
        else{
            newObj[key]=obj[key]
        }
    }
    return newObj;
}

const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
}

const transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' });
console.log(transformUser);
// { first: 'Tony', last: 'Stark', age: 54 }

export {}
