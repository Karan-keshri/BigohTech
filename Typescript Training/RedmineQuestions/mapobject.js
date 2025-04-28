// const originalObject = { a: 1, b: 2, c: 3 };
// const mappedObject = mapObject(originalObject, (value) => value.toString());
// MappedObject should be and have same type
// { a: '1', b: '2', c: '3' }
// function mapObject<T extends Record<string, number>, U>(obj: T,
//     callback: (value: T[keyof T]) => U
//   ): Record<string, U> {
//     const result: Record<string, U> = {};
//     for (const key in obj) {
//       result[key] = callback(obj[key]);
//     }
//     return result;
//   }
function mapObject(obj, callback) {
    var result = {};
    for (var key in obj) {
        result[key] = callback(obj[key]);
    }
    return result;
}
var originalObject = { a: 1, b: 2, c: 3 };
// const mappedObject = mapObject(originalObject, (value) => {
//   return value * 2; 
// });
var mappedObject = mapObject(originalObject, function (value) { return value.toString(); });
console.log(mappedObject);
