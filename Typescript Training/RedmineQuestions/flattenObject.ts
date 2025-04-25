function flattenObject(obj,parentKey='',result={}) {
    for (let key in obj) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof obj[key] === 'object' ) {
                flattenObject(obj[key], newKey, result); // Recursively flatten nested objects
            } else {
                result[newKey] = obj[key]; // Assign the value to the flat key
            }
    }
    return result;
}

const data = {
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

  console.log(flattenObject(data,'',{}))

export{}