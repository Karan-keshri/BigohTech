// const obj = ["noodles", { list: ["eggs", "flour", "water"] }];
// const deepCopy = JSON.parse(JSON.stringify(obj));
// deepCopy[1].list.push("sugar");

// redo 
const obj = {
    firstName : "Karan",
    lastName : "Keshri",
    address : {
        city : "Noida",
        state : "UP",
    }
}

const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.address.city = "Delhi";

console.log(obj); // { firstName: 'Karan', lastName: 'Keshri', address: { city: 'Noida', state: 'UP' } }
console.log(deepCopy); // { firstName: 'Karan', lastName: 'Keshri', address: { city: 'Delhi', state: 'UP' } }