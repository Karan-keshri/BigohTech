// You are given a JSON object with various key-value pairs where the values 
// may be deeply nested objects, arrays, or primitive types like number, string, boolean, etc.

// Your task is to write a function replaceKeysAndConvertStrings<T> that:

// Replaces every key in the object that contains the string "id" with "identifier".
// Converts any string values in the object to uppercase.
// This manipulation must apply recursively to any nested objects or arrays within the JSON.
// You must implement this in a type-safe manner, ensuring that the structure of the object is preserved.

// const data = {
//   userId: "john_doe",
//   details: {
//     addressId: "abc123",
//     name: "John",
//     attributes: {
//       itemId: "xyz456",
//       info: "Some info here",
//     },
//   },
//   items: [
//     {
//       productId: "p123",
//       description: "a product",
//     },
//     "just a string",
//   ],
// };

// const updatedData = {
//   userIdentifier: "JOHN_DOE",
//   details: {
//     addressIdentifier: "ABC123",
//     name: "JOHN",
//     attributes: {
//       itemIdentifier: "XYZ456",
//       info: "SOME INFO HERE",
//     },
//   },
//   items: [
//     {
//       productIdentifier: "P123",
//       description: "A PRODUCT",
//     },
//     "JUST A STRING",
//   ],
// };

function replaceKeysAndConvertStrings<T>(obj: T): T {
   
    if (typeof obj === 'object' && obj !== null) {
        const result: any = {};
        for (const key in obj) {
            let newKey :string= key;
            if (typeof key === 'string' && key.includes("id")) {
                newKey = key.replace("id", "identifier");
            }

            const value = obj[key];
            if (typeof value === 'string') {
                result[newKey] = value.toUpperCase();
            } else if (typeof value === 'object' && value !== null) {
                result[newKey] = replaceKeysAndConvertStrings(value);
            } else {
                result[newKey] = value;
            }
        }
        return result;
    }
    return obj;
}

const data = {
    userId: "john_doe",
    details: {
        addressId: "abc123",
        name: "John",
        attributes: {
            itemId: "xyz456",
            info: "Some info here",
        },
    },
    items: [
        {
            productId: "p123",
            description: "a product",
        },
        "just a string",
    ],
};

const updatedData = replaceKeysAndConvertStrings(data);
console.log(updatedData);