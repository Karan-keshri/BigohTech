class MyPromise {
    constructor(executor) {
        this.status = "pending";
        this.value = undefined;
        this.onFulfilled = null;
        this.onRejected = null;

        const resolve = (value) => {
            if (this.status === "pending") {
                this.status = "success";
                this.value = value;
                if (this.onFulfilled) this.onFulfilled(value);
            }
        };

        const reject = (reason) => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = reason;
                if (this.onRejected) this.onRejected(reason);
            }
        };
        executor(resolve, reject);
    }

    then(onFulfilled, onRejected) {
        this.onFulfilled = onFulfilled;
        this.onRejected = onRejected;

        if (this.status === "success" ) {
            this.onFulfilled(this.value);
        }

        if (this.status === "rejected" ) {
            this.onRejected(this.value);
        }

        return this; 
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }
}

const promise1 = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve(' Resolved after 1s'), 1000);
});

promise1.then(value => console.log(value));

const promise2 = new MyPromise((resolve, reject) => {
    setTimeout(() => reject(' Rejected after 1s'), 1000);
});

promise2.catch(value => console.log(value));
