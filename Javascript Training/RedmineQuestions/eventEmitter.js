// class EventEmitter {
//     constructor() {
//         // Your code here
//     }

//     on(event, listener) {
       
//     }

//     emit(event, ...args) {
//         // Your code here
//     }

//     off(event, listener) {
//         // Your code here
//     }
// }

// const emitter = new EventEmitter();
// const greet = (name) => console.log(`Hello, ${name}`);
// emitter.on('greet', greet);
// emitter.emit('greet', 'Alice'); // Output: Hello, Alice
// emitter.off('greet', greet);
// emitter.emit('greet', 'Bob'); // No output


class EventEmitter {
    events = {}
    constructor() {
        this.events = {}; // Stores event names and their listeners
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }

    off(event, listener) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(l => l !== listener);
        }
    }
}

// Example usage
const emitter = new EventEmitter();
const greet = (name) => console.log(`Hello, ${name}`);

emitter.on('greet', greet);
emitter.emit('greet', 'Alice'); // Output: Hello, Alice
emitter.emit('greet', 'Robin');   // Output: Hello, Robin
emitter.off('greet', greet);
emitter.emit('greet', 'Bob');   // No output



