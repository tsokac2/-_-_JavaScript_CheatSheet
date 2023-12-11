<h1 align="center">JavaScript ECMAScript 6</h1>

### Overview of the Section
* **[What is ES6?](#What-is-ES6?)**
* **[let and const Declarations](#let-and-const-Declarations)**
* **[Arrow Functions](#Arrow-Functions)**
* **[Template Literals](#template-literals)**
* **[Default Parameters](#default-parameters)**
* **[Destructuring Assignment](#destructuring-assignment)**
* **[Classes](#classes)**
* **[this keyword](#this-keyword)**
* **[Promises](#promises)**
* **[Modules](#modules)**
* **[Map and Set Data Structures](#map-and-set-data-structures)**
* **[WeakMap in ES6](#weakmap-in-es6)**
* **[Generator functions in ES6](#generator-functions-in-es6)**


#
### What is ES6?
ECMAScript 6, also known as ES6 or ECMAScript 2015, is a major update to the JavaScript programming language. It introduced several new features and syntax enhancements to make JavaScript code more expressive and maintainable.
#

### let and const Declarations
ES6 introduced the ``let`` and ``const`` keywords for variable declarations. ``let`` allows for block-scoped variables, while const is used for constants, whose values cannot be reassigned.

#### Explain constants in ES6?
Also are known as immutable variables  - ```const strLength =  10;```<br/>
Enable protection to overwrite a variable value.

#### Use of ```let``` and ```const``` in JavaScript?
Different ways of creating variables. <br/>
Keywords```let``` and ```const```  introduced in ES6.<br/>
```const``` - immutable variables <br/>
```let``` - used to create mutable variables.

#### What is ```let``` keyword?
```let``` helps to create block-level local scope variables.

#### Declaring variable without keyword var.
The variable becomes Global Variable.

#### Are ```let``` variables hoisted?
Yes, they are hoisted but they are not initialized with the value.<br/>
Temporal Dead Zone - vars are named into the memory but they are not initialized with any value.

Hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. 

This means that you can use a variable or a function before it is declared in your code.

However, it's important to note that only the declarations are hoisted, not the initializations.

Here's a simple example to illustrate this:
```
console.log(x); // Throws ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

#### Let vs var?

|            | ```var``` |
| ---------- | --- |
| **Scope**		 | Scoped to the immediate function body |
| **Initialized Value** | Value initialized with undefined |

|            | ```let``` |
| ---------- | --- |
| **Scope**		 | Scoped to the immediate enclosing block |
| **Initialized Value** | Value initialized with nothing |

```var``` - function scoped <br/>
```let``` - block scoped

#### JavaScript concepts
JavaScript runtime - is an engine that interprets JavaScript code

| Keywords | Scope | Mutable |
| -------- | ------| --------|
| ``var`` | functions | Yes |
| ``let`` | block | Yes |
| ``const`` | block | No |

**[Back To The Top](#Overview-of-the-Section)**
#

### Arrow Functions

Arrow functions provide a more concise syntax for writing function expressions. They have a shorter syntax, and the value of this is lexically scoped, simplifying function declarations.

Here's a basic explanation along with a code example:

```
const functionName = (parameters) => {
  // function body
  return result;
};
```
Arrow functions can have either a single parameter without parentheses or require parentheses for multiple parameters. 

If the function body consists of a single statement, you can omit the curly braces and the return keyword.

```
// Traditional function expression
function add(a, b) {
  return a + b;
}

// Equivalent arrow function
const addArrow = (a, b) => a + b;

// Usage
console.log(add(5, 3));      // Output: 8
console.log(addArrow(5, 3)); // Output: 8
```

In this example, ``addArrow`` is an arrow function that performs the same addition as the traditional ``add`` function. The arrow function is more concise, especially when the function body is a single expression.

**[Back To The Top](#Overview-of-the-Section)**
#

### Template Literals
Template literals allow the embedding of expressions inside string literals. This is achieved using backticks ``(`)``, and it makes string interpolation more straightforward and readable.

Here's a simple example to illustrate how template literals work:

```
// Traditional way
const name = "Tomislav";
const greeting = "Hello, " + name + "!";

// Using template literals
const templateGreeting = `Hello, ${name}!`;

console.log(greeting); // Output: Hello, Tomislav!
console.log(templateGreeting); // Output: Hello, Tomislav!
```

As you can see, with template literals, you can directly embed variables or expressions within ${} inside the string, making it more concise and readable. 

This feature is especially useful when dealing with multiline strings or concatenating multiple variables.

**[Back To The Top](#Overview-of-the-Section)**
#

### Default Parameters
ES6 enables the definition of default values for function parameters. If a parameter is not passed, the default value is used.

Here's an example of how default parameters work:

```
// Function with default parameters
const greet = (name, greeting = "Hello") => {
    console.log(`${greeting}, ${name}!`);
}

// Calling the function without providing a value for 'greeting'
greet("Tomislav"); // Output: Hello, Tomislav!

// Calling the function with a custom 'greeting'
greet("Tomislav", "Good morning"); // Output: Good morning, Tomislav!
```

In this example, the greeting parameter has a default value of ``"Hello."`` If the caller doesn't provide a value for greeting, the default value is used. 
However, if a value is provided, it takes precedence.

**[Back To The Top](#Overview-of-the-Section)**
#

### Destructuring Assignment

This feature allows you to extract values from ``arrays`` or properties from ``objects`` and assign them to variables in a more concise way.

#### Destructuring Arrays

In this example, we declare two variables (first and second) and assign them values from the numbers array using destructuring assignment.

```
// Traditional way
const numbers = [1, 2, 3, 4, 5];
const first = numbers[0];
const second = numbers[1];

// Destructuring assignment
const [first, second] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
```

#### Destructuring Objects

In this example, we use destructuring assignment to directly extract values from the ``person`` object and assign them to variables with the same names.

```
// Traditional way
const person = { name: 'Tomislav', age: 30, city: 'Dublin' };
const name = person.name;
const age = person.age;

// Destructuring assignment
const { name, age } = person;

console.log(name); // Output: Tomislav
console.log(age); // Output: 30
```

Destructuring assignment can also be used with nested structures, default values, and rest syntax, providing a versatile and powerful tool for working with complex data structures in JavaScript.

#### Advance example of Destructuring Assignment

**Swapping Values**

Here, we use destructuring assignment to swap the values of variables a and b without the need for a temporary variable.

```
let a = 5;
let b = 10;

// Traditional way using a temporary variable
let temp = a;
a = b;
b = temp;

// Using destructuring assignment for swapping
[a, b] = [b, a];

console.log(a); // Output: 10
console.log(b); // Output: 5

```

**Ignoring Values**

In this example, we use array destructuring to ignore the first two elements of the numbers array and capture the rest in a variable called rest.

```
const numbers = [1, 2, 3, 4, 5];

// Ignore the first two values
const [, , ...rest] = numbers;

console.log(rest); // Output: [3, 4, 5]
```

**Destructuring Function Parameters**

In this case, the printCoordinates function takes an object as a parameter, and we use destructuring to directly extract x and y properties from the object.

```
// Without destructuring
function printCoordinates(point) {
  console.log(`X: ${point.x}, Y: ${point.y}`);
}

// With destructuring
function printCoordinates({ x, y }) {
  console.log(`X: ${x}, Y: ${y}`);
}

const coordinates = { x: 10, y: 20 };
printCoordinates(coordinates);
```

**Destructuring with the Rest Operator:**

Here, the ...remaining syntax captures the remaining elements of the array in a new array called remaining.

```
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

const [primary, secondary, ...remaining] = colors;

console.log(primary); // Output: red
console.log(secondary); // Output: green
console.log(remaining); // Output: ['blue', 'yellow', 'orange']
```
**[Back To The Top](#Overview-of-the-Section)**
#

### Classes
In JavaScript, ``classes`` are a way to define and create objects. 
They provide a blueprint for creating objects with a set of properties and methods. 

Here's a simple example of how you can create a class in JavaScript:

```
class Car {
  // Constructor method is called when an object is created
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to get a brief information about the car
  getCarInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  // Method to start the car
  start() {
    console.log(`${this.getCarInfo()} is starting...`);
  }
}

// Creating an instance of the Car class
const myCar = new Car('Toyota', 'Camry', 2022);

// Accessing properties and calling methods
console.log(myCar.getCarInfo()); // Output: 2022 Toyota Camry
myCar.start(); // Output: 2022 Toyota Camry is starting...
```
In this example, the ``Car`` class has a constructor method that initializes the make, model, and year properties. 
It also has two additional methods, ``getCarInfo`` and ``start``, which provide information about the car and simulate starting the car, respectively.

You can create instances of the ``Car`` class using the ``new`` keyword and then access properties and call methods on those instances. This is a basic example, and JavaScript classes offer more features like inheritance, static methods, and more. 

**[Back To The Top](#Overview-of-the-Section)**
#

### ``this`` keyword

In JavaScript, the ``this`` keyword refers to the context in which a function is executed. The value of ``this`` is determined by how a function is called. 

Let me provide you with an example to illustrate this concept:

```
// Example 1: 'this' in a global context
function globalContextExample() {
  console.log(this); // 'this' refers to the global object (window in a browser)
}

globalContextExample();

// Example 2: 'this' in an object method
const myObject = {
  property: "I am a property",
  method: function() {
    console.log(this.property); // 'this' refers to the object that owns the method
  }
};

myObject.method();

// Example 3: 'this' in a constructor function
function Person(name) {
  this.name = name;
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  };
}

const person1 = new Person("Tomislav");
person1.sayHello();

// Example 4: 'this' in an event handler
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  console.log(this); // 'this' refers to the element that triggered the event (the button)
});
```
1. In the first example, when a function is called in the global context, ``this`` refers to the global object (window in a browser). 
2. In the second example, ``this`` inside a method of an object refers to the object itself. 
3. In the third example, ``this`` in a constructor function refers to the instance of the object being created. 
4. Lastly, in the fourth example, ``this`` in an event handler refers to the element that triggered the event.

Understanding ``this`` is crucial in JavaScript to correctly reference the context in which a function is invoked. 

**[Back To The Top](#Overview-of-the-Section)**
#

### Promises

In JavaScript, promises are a way to handle asynchronous operations. They represent a value that might be available now, or in the future, or never. 

Promises have three states:

1. **Pending:** The initial state; the promise is neither fulfilled nor rejected.
2. **Fulfilled:** Meaning that the operation completed successfully, and the promise has a resulting value.
3. **Rejected:** Meaning that the operation failed, and the promise will have a reason for the failure.

Here's a basic example to illustrate the concept:

```
// Function that returns a promise
function doAsyncTask() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const success = true; // Change this to simulate success or failure

            if (success) {
                resolve("Operation completed successfully!");
            } else {
                reject("Operation failed!");
            }
        }, 2000); // Simulating a 2-second delay
    });
}

// Using the promise
doAsyncTask()
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

In this example, ``doAsyncTask`` is a function that returns a promise. Inside the promise, there's a simulated asynchronous operation using ``setTimeout``. If the operation is successful, it calls resolve with a success message; otherwise, it calls ``reject`` with an error message.

The ``then`` method is used to handle the fulfilled state, and the ``catch`` method is used to handle the rejected state. 
You can chain multiple ``then`` methods for more complex workflows.

Promises provide a cleaner way to work with asynchronous code compared to traditional callback-based approaches, making it easier to reason about and maintain asynchronous workflows in your JavaScript code.

**[Back To The Top](#Overview-of-the-Section)**
#

### Modules

In JavaScript, modules are a way to organize code into separate files, making it more modular and maintainable. 
Each file in JavaScript is considered a module, and you can export and import functionalities between these modules.

Let's go through a simple example. Suppose you have two files: mathOperations.js and main.js.

``mathOperations.js``

```
// mathOperations.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

In this file, we have defined two functions (``add`` and ``subtract``) and exported them using the ``export`` keyword.

``main.js``

```
// main.js
import { add, subtract } from './mathOperations';

// Using the exported functions
const result1 = add(5, 3);
const result2 = subtract(8, 4);

console.log('Addition Result:', result1);
console.log('Subtraction Result:', result2);
```

Here, we use the ``import`` statement to bring in the ``add`` and subtract functions from the ``mathOperations`` module. We can then use these functions in the ``main.js`` file.

To run this example, you would typically use a module bundler like Webpack or a JavaScript runtime that supports ECMAScript modules (ESM).

Here's a simple example of how you might run this using Node.js:

``node --experimental-modules main.js``

This enables ECMAScript module support in Node.js.

This approach helps keep your code organized, promotes reusability, and makes it easier to collaborate with other developers. 

Modules are an integral part of modern JavaScript development, especially with the widespread adoption of ECMAScript modules.

**[Back To The Top](#Overview-of-the-Section)**
#

### Map and Set Data Structures

ES6 includes new data structures, Map and Set, providing more efficient ways to work with key-value pairs and unique values, respectively.

#### Map
A ``Map`` in JavaScript is a collection of key-value pairs where each key and value can be of any data type. It provides an easy way to associate values with keys and retrieve them efficiently. 

Here's an example:

```
// Creating a Map
let myMap = new Map();

// Adding key-value pairs
myMap.set('name', 'Tomislav');
myMap.set('location', 'Dublin');
myMap.set('role', 'API Integration Engineer');

// Accessing values
console.log(myMap.get('name')); // Output: Tomislav

// Checking if a key exists
console.log(myMap.has('role')); // Output: true

// Deleting a key-value pair
myMap.delete('location');

// Iterating over the Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

#### Set
A Set is a collection of unique values in JavaScript. It doesn't allow duplicate elements, making it useful when you need to store a list of distinct items. 

Here's an example:

```
// Creating a Set
let mySet = new Set();

// Adding elements
mySet.add('Dublin');
mySet.add('API Integration');
mySet.add('JavaScript');

// Checking if an element exists
console.log(mySet.has('Dublin')); // Output: true

// Deleting an element
mySet.delete('JavaScript');

// Iterating over the Set
mySet.forEach(value => {
  console.log(value);
});
```

In these examples, I used the ``Map`` to store information with specific keys (e.g., name, location, role), and the ``Set`` to store a unique list of elements. 

Both data structures provide efficient ways to manage and retrieve data based on your use case.

**[Back To The Top](#Overview-of-the-Section)**
#

### WeakMap in ES6
WeakMap is a data structure introduced in ES6 that allows you to store key-value pairs. 
However, unlike regular JavaScript objects, WeakMaps have a unique property: the keys in a WeakMap are not strongly referenced, which means they can be garbage collected if there are no other references to them. 

This key feature makes WeakMaps useful for storing data associated with objects without preventing those objects from being collected when they are no longer needed.

#### Key Characteristics of WeakMaps:

- **Weak Keys:** WeakMaps only allow objects or non-registered symbols as keys. These keys are not strongly referenced, which means they can be garbage collected if there are no other references to them.

- **Arbitrary Values:** WeakMaps can store values of any arbitrary JavaScript type. This flexibility allows you to store data of various forms within a WeakMap.

- **Efficient Memory Management:** WeakMaps contribute to efficient memory management by allowing the garbage collector to reclaim unused objects, even if they are still referenced by WeakMap entries.

#### Applications of WeakMaps:

- **Cacheing Data:** WeakMaps are often used for caching data that is associated with objects. Since the keys can be garbage collected, the cache can be cleaned up automatically when the associated objects are no longer needed.

- **Memoization:** WeakMaps can be employed for memoization – a technique that caches the results of expensive calculations to avoid repeated computation. This reduces memory consumption and improves performance.

- **WeakMap-Based Algorithms:** WeakMaps are used in various algorithms, such as weakly referenced sets and sets of unique elements. These algorithms leverage the weak key property to efficiently manage collections of objects.

#### Example Usage of WeakMap:

Consider a function that creates a WeakMap to store the size of each object in a collection:
```
function calculateObjectSizes(objects) {
  const objectSizes = new WeakMap();

  for (const object of objects) {
    objectSizes.set(object, calculateSize(object));
  }

  return objectSizes;
}
```
In this example, the ``objectSizes`` WeakMap will hold the size of each object in the objects array. Since the keys are objects, they will be garbage collected when the objects array is no longer referenced.

**WeakMaps** offer a unique approach to storing key-value pairs while ensuring that associated objects can be garbage collected when they are no longer needed. 

This feature makes them valuable tools for memory management, caching, and various algorithms that rely on weakly referenced data structures.

**[Back To The Top](#Overview-of-the-Section)**
#

### Generator functions in ES6?

Generator functions are a powerful feature introduced in ES6 that allows you to write iterative code in a more concise and readable way. 

Unlike regular functions, generator functions can be paused and resumed multiple times, making them ideal for tasks like processing large data sets or performing asynchronous operations.

#### Syntax

Generator functions are defined using the ``function* keyword``, followed by the function name and parentheses. The parentheses can contain any number of parameters, just like regular functions.

```
function* myGeneratorFunction(param1, param2) {
  // Generator code goes here
}
```

#### Yield Expression
The ``yield`` keyword is used to pause the execution of the generator function and return a value to the caller. The value returned by ``yield`` is stored in the value property of the object returned by the ``next()`` method, which is used to resume the generator function's execution.

```
function* myGeneratorFunction() {
  for (let i = 0; i < 5; i++) {
    yield i; // Yield the current iteration value
  }
}

const generator = myGeneratorFunction();

for (let value of generator) {
  console.log(value); // Output: 0 1 2 3 4
}
```

#### Yield Multiple Values

The ``yield*`` syntax can be used to yield multiple values from a generator function. This is particularly useful for iterating over nested data structures.
```
function* myGeneratorFunction() {
  const data = [1, 2, 3];
  for (const value of data) {
    yield* value; // Recursively yield values from nested data
  }
}

for (let value of myGeneratorFunction()) {
  console.log(value); // Output: 1 2 3
}
```

#### Generator Usage Examples

Generator functions are often used for tasks like iterating over arrays, processing asynchronous data, or implementing coroutines. Here are a few examples:

#### Iterating over an array:
```
function* myGeneratorFunction(array) {
  for (const value of array) {
    yield value;
  }
}

const array = ['foo', 'bar', 'baz'];

for (let value of myGeneratorFunction(array)) {
  console.log(value); // Output: foo bar baz
}
```
#### Processing asynchronous data:
```
function* fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    yield* data; // Recursively yield values from nested data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

for (let item of fetchData(url)) {
  console.log(item); // Output: { id: 1, title: ... }
}
```
#### Implementing coroutines:

Coroutines are asynchronous subroutines that can suspend and resume execution at certain points. Generator functions are a good way to implement coroutines in JavaScript.

```
function* myCoroutine() {
  while (true) {
    const input = yield; // Read input from the caller
    console.log('Processing input:', input);
  }
}

const coroutine = myCoroutine();

coroutine.next('Hello, world!'); // Output: Processing input: Hello, world!
coroutine.next('Another message'); // Output: Processing input: Another message
```

``Generator functions`` are a powerful tool for writing concise, readable, and efficient asynchronous code in JavaScript. 

They provide a more natural way to represent iterative processes and handle asynchronous operations, and they can help to prevent Callback Hell and other common pitfalls of asynchronous programming.

**[Back To The Top](#Overview-of-the-Section)**
#