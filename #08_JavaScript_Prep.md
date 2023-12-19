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

### Prototype Chain in JavaScript
The prototype chain is a mechanism for object inheritance in JavaScript. Each object has a prototype, and if a property or method is not found on the object, JavaScript looks for it in the object's prototype chain.
#### Example:
```
function Animal(name) {
    this.name = name;
}

Animal.prototype.sound = function() {
    return "Some generic sound";
};

const cat = new Animal("Fluffy");
console.log(cat.sound()); // Outputs "Some generic sound"
```

### How do you handle errors in JavaScript?

In JavaScript, errors can be handled using ``try``, ``catch``, and ``finally`` blocks.

#### Example:
```
try {
    // Code that may throw an error
    const result = someUndefinedVariable + 10;
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
} finally {
    // Code that runs regardless of whether there was an error
    console.log("Execution completed.");
}
```

### What are closures in JavaScript?

A ``closure`` is a function that has access to variables from its outer (enclosing) scope, even after that scope has finished executing.

```
function outerFunction() {
    const outerVariable = "I am from the outer function";
  
    function innerFunction() {
        console.log(outerVariable);
    }
  
    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs "I am from the outer function"
```

### What is the difference between the ``this`` keyword in a function declaration and an arrow function?