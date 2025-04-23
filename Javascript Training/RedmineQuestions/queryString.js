function generateQueryStringUrl(url, obj) {
    const query = Object.keys(obj)
        .map(key => `${(key)}=${(obj[key])}`)
        .join('&');

    return `${url}?${query}`;
}

const obj = {
    keyOne: "value One",
    keyTwo: "value Two",
    keyThree: "value Three"
};

const baseUrl = "https://localhost:400";

const result = generateQueryStringUrl(baseUrl, obj);
console.log(result);
//https://localhost:400?keyOne=value one&keyTwo=value Two&keyThree=value Three
