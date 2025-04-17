


function getData(){
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
        console.log("Data fetched successfully");
        resolve({userName : "User" , password: "1234"});
        }else {
            reject("error in getting data");
        }
    },2000)
})
}

async function fetchData(){
    try {
        const response=await getData();
        console.log(response);
    } catch (error) {
        console.log("Error: ",error);
    }
}
fetchData();