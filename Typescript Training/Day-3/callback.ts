type addition =(num1:number,num2:number)=>number;

const add:addition=(num1,num2)=>{
    return num1+num2;
}
const sub:addition=(num1,num2)=>num1-num2;

function operation(fn:addition,num1:number,num2:number){
    const result=fn(num1,num2);
    console.log(result);
}

operation(add,10,20);
operation(sub,100,10);


function message(mesg:string,delay:number,fn:()=>void){
    console.log("Start");
    setTimeout(()=>{
        console.log(mesg);
        fn();
    },delay)
}

function fn():void{
    console.log("end")
}

message("Hello",2000,fn);