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
const org = () => {
  const str = "Hello, for the outside!";
  
  const inner = () => {
    console.log(str);
  };
  
  return inner;
};

// Option 1: Call the returned function directly
org()(); 

// Option 2: Assign the returned function to a variable and then call the variable
const innerFunc = org();
innerFunc();
```

### What is the difference between the ``this`` keyword in a function declaration and an arrow function?

In a regular function, ``this`` refers to the object that called the function, while in an arrow function, ``this`` retains the value of the enclosing context.

#### Example:
```
const obj = {
    regularFunction: function() {
        console.log(this); // Refers to obj
    },
    arrowFunction: () => {
        console.log(this); // Refers to the global object or undefined in strict mode
    }
};

obj.regularFunction();
obj.arrowFunction();
```

### What are some of the different ways to create classes in JavaScript?
In JavaScript, you can create classes using function ``constructors``, class ``declarations``, or class ``expressions``.

#### Function Constructors:
```
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getInfo = function() {
    return `${this.name} is ${this.age} years old.`;
};

const person1 = new Person('Tom', 30);
console.log(person1.getInfo());
```

#### Class Declarations:
```
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    getInfo() {
        return `${this.name} is a ${this.species}.`;
    }
}

const animal1 = new Animal('Lion', 'Mammal');
console.log(animal1.getInfo());
```

#### Class Expressions:
```
const Car = class {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getInfo() {
        return `This car is a ${this.brand} ${this.model}.`;
    }
};

const car1 = new Car('Toyota', 'Camry');
console.log(car1.getInfo());
```

### What is the difference between inheritance and composition in object-oriented programming?
- ``Inheritance`` involves creating a new class that is a modified version of an existing class. 
- ``Composition`` involves creating an object that contains other objects to use their functionality.

#### Example using Inheritance:
```
class Animal {
    speak() {
        console.log("Some generic sound");
    }
}

class Cat extends Animal {
    // Additional methods or properties specific to Cat
}

const fluffy = new Cat();
fluffy.speak(); // Outputs "Some generic sound"
```