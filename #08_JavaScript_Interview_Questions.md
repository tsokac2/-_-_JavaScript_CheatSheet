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

### What is the difference between the ``instanceof`` and ``isPrototypeOf`` operators in JavaScript?

Both operators are used to check if an object is an instance or prototype of another object, respectively.

#### Example using instanceof:
```
class Car {}

const myCar = new Car();
console.log(myCar instanceof Car); // Outputs true
```

#### Example using isPrototypeOf:
```
function Vehicle() {}
function Car() {}

Car.prototype = Object.create(Vehicle.prototype);

const myCar = new Car();
console.log(Vehicle.prototype.isPrototypeOf(myCar)); // Outputs true
```

## ReactJS

### What is ReactJS?
ReactJS is a JavaScript library for building user interfaces, focusing on creating reusable UI components.

### What are the key features of ReactJS?
- ``Component-Based``: UIs are built using components.
- ``Virtual DOM``: Efficiently updates and renders components.
- ``Declarative Syntax``: Describes how the UI should look based on the application state.
- ``React Native``: Allows building mobile applications using React.

### What is JSX?
``JSX`` is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements and components in a more concise and readable way.
``const element = <h1>Hello, React!</h1>;``

### What is the difference between a functional component and a class component in ReactJS?
Functional components are stateless and defined as functions, while class components have state and lifecycle methods.

#### Functional Component:
```
const Greet = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};
```
#### Class Component:
```
class Greet extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}
```

### What is state in ReactJS?

``State`` in React represents the local state of a component, allowing it to manage and update data.

#### Example:

```
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}
```

### What are props in ReactJS?

Props (short for properties) are used to pass data from a parent component to a child component.

### Example:
```
const WelcomeMessage = (props) => {
    return <h1>Welcome, {props.name}!</h1>;
};

const App = () => {
    return <WelcomeMessage name="Tomislav" />;
};
```

### What is a Difference between State and Props:
- ``State``: Managed within a component and can be updated. Used for internal component state.
- ``Props``: Received from a parent component and cannot be modified by the child component.

### Why Should We Not Update State Directly?
Updating state directly can lead to unexpected behavior. Always use ``setState()`` to update state, as it ensures proper handling of state changes.

### What is the purpose of a callback function as an argument of ``setState()``?
The callback function in ``setState()`` is invoked after the state is updated, making it useful for performing actions that depend on the updated state.

#### Example:
```
this.setState({ count: this.state.count + 1 }, () => {
    console.log("Count updated:", this.state.count);
});
```

### What is the difference between HTML and React event handling?
React event handling is similar to HTML event handling but uses camelCase naming conventions and passes a function reference rather than a string.
#### HTML Event Handling:
``<button onclick="handleClick()">Click me</button>``

#### React Event Handling:
``<button onClick={handleClick}>Click me</button>``

### What are the different lifecycle methods of a React component?

- ``componentDidMount``: Called after the component is rendered.
- ``componentDidUpdate``: Called after the component is updated.
- ``componentWillUnmount``: Called before the component is removed.

### What is context in ReactJS?
Context provides a way to pass data through the component tree without having to pass props manually at every level.

### What is the difference between ReactJS and React Native?

- ``ReactJS``: Used for building web applications, providing a ``virtual DOM`` for efficient updates.
- ``React Native``: Used for building mobile applications, allowing developers to use React to write native mobile apps.

### What are some of the best practices for writing ReactJS code?
- ``Component Organization``: Divide your application into small, reusable components.
- ``State Management``: Use stateful components only where necessary; consider using state management libraries like Redux for complex state.
- ``Lifecycle Methods``: Understand and use lifecycle methods appropriately for managing component behavior.
- ``Immutability``: Avoid directly mutating state; use immutability principles to update state.
- ``Conditional Rendering``: Use conditional rendering to display components based on conditions.
- ``Key Prop``: When rendering lists, provide a unique key prop to each item for efficient updates.

### How do you test ReactJS components?
- ``Unit Testing``: Test individual components in isolation using tools like ``Jest`` and ``React Testing Library``.
- ``Integration Testing``: Test the interaction between multiple components or the entire application.
- ``Snapshot Testing``: Use snapshot testing to capture a component's output and detect unexpected changes.
- ``Mocking``: Mock external dependencies or APIs to isolate component testing.

### What is a Virtual DOM in ReactJS?

The Virtual DOM (Document Object Model) is a concept in ReactJS that represents an in-memory, lightweight copy of the actual DOM in a web browser. It acts as an intermediary between the React components and the actual browser DOM.