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

**[Back To The Top](#Overview-of-the-Section)**
#

### ``this`` keyword


**[Back To The Top](#Overview-of-the-Section)**
#