<h1 align="center">JavaScript Interview Questions</h1>

### Explain the difference between synchronous and asynchronous programming in JavaScript?

- ``Synchronous programming`` executes code sequentially, one line at a time, and each operation must wait for the previous one to complete. 
- ``Asynchronous programming``, on the other hand, allows multiple operations to occur concurrently.

#### Example of Synchronous Code:
```
console.log("Start");
console.log("Middle");
console.log("End");
```

#### Example of Asynchronous Code using Callbacks:
```
console.log("Start");

setTimeout(() => {
    console.log("Middle");
}, 1000);

console.log("End");
```

### What is the difference between a function and a method in JavaScript?

In JavaScript, a ``function`` is a standalone block of code, while a ``metho``d`` is a function that belongs to an object.

#### Function Example:
```
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Tomislav"));
```

#### Method Example:
```
const person = {
    name: "Tomislav",
    greet: function() {
        return `Hello, ${this.name}!`;
    }
};

console.log(person.greet());
```