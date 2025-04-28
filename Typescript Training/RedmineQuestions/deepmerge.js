// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { b: { d: 3 }, e: 4 };
// const merged = deepMerge(obj1, obj2);
// Merged should have type { a: number; b: { c: number; d: number; }; e: number; }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Challenge1: If object have a same key with different value type, then it should persist the type of second object key value which is passed as parameter
// Challenge2: Give type error if not of same primitive type.
function deepMerge(obj1, obj2) {
    var result = __assign({}, obj1);
    for (var key in obj2) {
        if (key in result && typeof result[key] === 'object'
            && typeof obj2[key] === 'object') {
            result[key] = deepMerge(result[key], obj2[key]);
        }
        else {
            result[key] = obj2[key];
        }
    }
    return result;
}
var obj1 = { a: 1, b: { c: 2 } };
var obj2 = { b: { d: 3 }, e: 4 };
var merged = deepMerge(obj1, obj2);
console.log(merged);
