// The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.
// A Promise is in one of these states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, resulting in a value.
// 3. Rejected: The operation failed, resulting in a reason for the failure (error).

let promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise 1 fulfilled");
        resolve("promise 1 resolved");
    },1000)
})

promise1.then(function(value){
    console.log(value);
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynch task2 resolved");
        resolve({userName : "Karan" , email : "karan@gmail.com"});
       // reject("error in completing task");
    },2000)
}).then(function(value){
    console.log(value);
})
.catch(function(error){
    console.log("Error: ",error);
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
        console.log("Asynch task3 resolved");
        resolve({userName : "NewUser" , email : "user@gmail.com"});
        }else {
            reject("error in completing task");
        }
    },2000)
}).then(function(user){
    console.log(user);
    return user.userName;
}).then(function(username){
    console.log("User name is: ",username);
})
.catch(function(error){
    console.log("Error: ",error);
})


