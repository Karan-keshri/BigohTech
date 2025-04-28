var nestedObj = {
    name: "shiv",
    age: null,
    add: {
        location: "sec-15",
        city: null,
        addDetails: {
            houseNo: null
        }
    }
};
var nestedRequiredObj = {
    name: "abc",
    age: 12,
    add: {
        location: "qwert",
        city: "qwe",
        addDetails: {
            houseNo: 12
        }
    }
};
var nestedPartial = {
    name: "abc"
};
var newObj = {
    name: "qe",
    age: 13,
    // add :{
    //     location:"1",
    //     city :"qw",
    // }
};
var pickObj = {
    name: "asd",
    addDetails: {
        houseNo: 12
    }
};
console.log(pickObj);
