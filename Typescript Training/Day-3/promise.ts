let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
        console.log("task resolved");
        resolve({userName : "NewUser" , email : "user@gmail.com"});
        }else {
            reject("error in completing task");
        }
    },2000)
});
promise.then(function(user){
    console.log(user); 
})

promise.catch(function(error){
    console.log("Error: ",error);
})

export{}