"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flattenObject(obj, parentKey, result) {
    if (parentKey === void 0) { parentKey = ''; }
    if (result === void 0) { result = {}; }
    for (var key in obj) {
        var newKey = parentKey ? "".concat(parentKey, ".").concat(key) : key;
        if (typeof obj[key] === 'object') {
            flattenObject(obj[key], newKey, result); // Recursively flatten nested objects
        }
        else {
            result[newKey] = obj[key]; // Assign the value to the flat key
        }
    }
    return result;
}
var data = {
    user: {
        id: 123,
        name: "John Doe",
        addresses: [
            {
                street: "123 Main St",
                city: "Wonderland",
                postalCode: 12345,
            },
            {
                street: "456 Elm St",
                city: "Oz",
                postalCode: 67890,
            },
        ],
        settings: {
            theme: "dark",
            notifications: {
                email: true,
                sms: false,
            },
        },
    },
};
console.log(flattenObject(data, '', {}));
