//REDO

class MyPromise {

    //promise =>> resolve & reject
    constructor(executor) {
        // Your code here
        this.status="pending";
        this.value=undefined;
        this.onFulfilled=null;
        this.onRejected=null;

        const resolve=(value)=>{
            if(this.status=== 'pending'){
                this.status='success';
                this.value=value;
                this.onFulfilled(value);
            }
        }

        const reject=(value)=>{
            if(this.status==='pending'){
                this.status="Rejected";
                this.value=value;
                if(this.onRejected)this.onRejected(this.value);
            }
        }
        executor(reject,resolve)
    }

    then(onFulfilled, onRejected) {
        // Your code here
        this.onFulfilled=onFulfilled;
        this.onRejected=onRejected;
        if(this.status==='success'){
            this.onFulfilled(this.value);
        }

        if(this.status==='Rejected'){
            this.onRejected(this.value);
        }
    }

    catch(onRejected) {
        // Your code here
        return this.then(null,onRejected);
    }

    static resolve(value) {
        // Your code here
        return new MyPromise((resolve) => resolve(value));
    }

    static reject(reason) {
        // Your code here
        return new MyPromise((resolve,reject) => reject(reason));
    }
}

const promise1 = new MyPromise((resolve,reject) => {
    setTimeout(() => resolve('Rejected'), 1000);
});
promise1.then(value => console.log(value)); 
