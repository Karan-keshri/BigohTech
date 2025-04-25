import { add ,sub} from "./math";

console.log(add(1,2));
console.log(sub(100,10));

let Namespace = {
    add: function(a, b) {
        return a + b;
    },
    pi : 3.14
};

// Usage
console.log(Namespace.add(3, 5));
console.log(Namespace.pi);