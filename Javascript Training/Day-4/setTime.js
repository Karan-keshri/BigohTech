// setTimeout is a JavaScript function that lets you delay the execution of a piece of code.

// setTimeout(callback, delay, ...args);
// callback: The function you want to run.
// delay: Time in milliseconds (1000 ms = 1 second).
// ...args: (Optional) Arguments passed to the callback.

console.log("Start");
setTimeout(function(){
    console.log("waiting for 2 second");
},2000);

console.log("End");


function greet(fName,age){
    console.log(`your first name is ${fName} and age is ${age}`);
}

setTimeout(greet,3000,"Karan",23);

const timer = setTimeout(() => {
    console.log("You won't see this!");
  }, 3000);
  
  clearTimeout(timer); // Cancels the timeout


  // setInterval

  let count=0;
  const intervalId=setInterval(()=>{
    count++;
    console.log(`Timer is running ${count} times`);
    if(count==5){
        console.log("Timer is closed");
        clearInterval(intervalId);
    }
  },1000)
  