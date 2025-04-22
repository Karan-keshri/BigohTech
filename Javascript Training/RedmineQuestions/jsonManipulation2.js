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

const nestedObject = {
    company: {
      name: 'TechCorp',
      location: {
        city: 'New York',
        country: 'USA'
      },
      employees: [
        { name: 'Alice', role: 'Engineer' },
        { name: 'Bob', role: 'Manager' }
      ]
    },
    founded: 2000
  };
  
  const flattened = flattenObject(nestedObject);
  console.log(flattened);
  