<h1 align="center">JavaScript - ES6</h1>


### What are Babel and Webpack?
Are tolls for developers to optimize JS apps.

#### Webpack 
Is a tool that brings together many loaders and plugins to create a single bundle code file.<br/>
Allows you to run an environment that hosts _babel_.<br/>
Is an open-source JS module bundler that takes modules with dependencies and generates static assets representing those modules.<br/>
It bundles multiple modules and packs them into a _single.js_ file.<br/>
It comes with an integrated dev server.<br/>
Server example - ```localhost:8080/assets/bundle.js``` <br/>
```npm install Webpack --save-dev``` - for development only

Define script in _"package.json"_ file - define the starting point and end point<br/>
Run - ``` npm run build``` - command for runing the script<br/>
Script "-p" - for minified code


#### Bable 
Is a library that does a single job  - it compiles JavaScript.<br/>
Allows to write ES6 code and convert it back into pre-ES6 JS that the browser supports.

### Steps to install babel?
```
node -v 
npm -v
npm install --save-dev babel-cli
```

### Why is JavaScript a dynamic language?
Data types of the variable can change during the runtime and JavaScript will not complain about it.

### How does JavaScript determine data types?
By looking at the values during the runtime.



### Template literals in ES6?
Strings with embedded code and variables inside.<br/>
Done by using backtick
```
let a = "Hello";
let b = "John";
let c = `${a} ${b}`
console.log(c); // Hello John;
```

Template literals:
```
const a = 5;
const b = 10;

console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

// "Fifteen is 15 and
// not 20."
```

### Spread operator in ES6?
A new way to manipulate an array and object in ES6.

```
let a = [7,8,9];
let b = [1,2,3, ...a, 10];
console.log(b); // [1,2,3,7,8,9,10]

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

```

### What is set in ES6?
The ```Set``` object lets you store unique values of any type, whether primitive values or object references.
Sets are the collections that deal with single objects or single values. <br/>
Set is the collection of values similar to arrays, but it does not contain any duplicates.

```Set``` objects are collections of values.<br/>
A value in the ```Set``` may only occur once; it is unique in the ```Set```'s collection.<br/>
You can iterate through the elements of a set in insertion order.

**Performance** <br/>
The Set has method checks if a value is in a Set object, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the Set object.


```
const mySet1 = new Set()

mySet1.add(1)           // Set(1) { 1 }
mySet1.add(5)           // Set(2) { 1, 5 }
mySet1.add(5)           // Set(2) { 1, 5 }
mySet1.add('some text') // Set(3) { 1, 5, 'some text' }
const o = {a: 1, b: 2}
mySet1.add(o)

mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set
mySet1.has(5)              // true
mySet1.has(Math.sqrt(25))  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true
```

### What is WeakMap in ES6?
A WeakMap is a collection of key/value pairs whose keys must be objects, with values of any arbitrary JavaScript type, and which does not create strong references to its keys.<br/>
That is, an object's presence as a key in a WeakMap does not prevent the object from being garbage collected.

### Generator functions in ES6?
The ```function*``` declaration (```function``` keyword followed by an asterisk) defines a generator function, which returns a Generator object.

```
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
```

### New features in ES6?
- Block - Scope - Supports variables, const, functions
- Arrow Functions
- Template Literals
- Enhanced Regular Expressions
- Enhanced Object Properties
- Modules, Classes, Iterators, Generators
- Support Map/Set & WeakMap/WeakSet


### Explain array and object destructing in ES6.
Allows to extract data from array and objects into separate variables

```
let fullName = ["John", "Doe"];
let [first-name, last-name] = fullName;
consol.log(first-name, last-name); 
//John Doe

let c = [100,200,300,400];
let [a, ...b] = c;
console.log(a,b); 
// 100[200, 300, 400]
```

### How to create classes in ES6?
Using the ```class``` keyword

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Getter
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); 
// 100

```

### What are typeof functions?
Use ```typeof()``` function - find a better example and explanation

### Different datatypes in JavaScript?
Primitive: **string**, **number**, **null**, **undefined**, **bolean**, **big int**, **symbol**
Objects: **new Object()**

### Explain the undefined data type.
The Variable is declared but there is no value assigned to the variable.

### What is null?
Variable with no value or data.<br/>
Intentional absence of data.

### Difference between null and undefined?
**undefined** - var is created but the value is not defined.<br/>
**null** - variable is created and the value is null - indicating an absence of data.

### Explain hoisting.
The mechanism where variables and functions declaration is moved to the top of the scope before code executes.

### Global variables.
Are accessible through the webpage or throughout the document.
```
<script>
	var x = 10;
	function myFunc() {}
</script>
```



### Usage of Use strict?
Checks if the variable is defined using keywords ```var``` or ```let```<br/>
```
"use strict";
var x = 1;
```

```
function myStrictFunction() {

  // Function-level strict mode syntax

  "use strict";
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}

function myNotStrictFunction() {
  return "I'm not strict.";
}

```
The ```"use strict"``` directive can only be applied to the body of functions with simple parameters.

### What are closures?
Closures are functions inside functions and it makes normal functions stateful.<br/>
**Stateful** functions are the building blocks of applications;<br/>
They are atomic units of isolation, distribution, and persistence.<br/>
As objects, they encapsulate the state of a single entity (e.g., a specific user, device, or session) and encode its behavior.

### Why do we need closures?
Helps to avoid global variables.<br/>
Creating self-contained functions and self-contained states.<br/>
To create - self-contained Modules - self-contained state.<br/>
**Closures:** https://javascript.info/closure


### What is IIFE?
_Immediately Invoked Function Expression_ <br/>
It is an anonymous function that gets immediately invoked.

### IIFE vs normal functions?
A normal function simply includes a declaration and a definition but an IIFE is declaration, definition and invocation at the same time.<br/>
As the name says Immediately Invoked Function Execution.

### What are Design patterns?
These are time-tested solutions.

### Most used design pattern in JavaScript?
- Module design pattern or the Module revealing pattern.
- Self-contained independent components
- Provide Encapsulation and Abstraction
- Module PAttern = IIFE + CLOSURES
- Logical grouping
- Better structure code

### Various ways to create JavaScript objects?
Literal - ```let obj = {name: "Tom"};``` <br/>
```Object.create();``` <br/>
Constructor - functions <br/>
Classes - ES6

### Can we do inheritance in JavaScript?
It is done by using an object inheritance prototype object.<br/>
Every JavaScript object has a Prototype object.<br/>
It is an inbuilt object provided by JavaScript. <br/>
Prototype changing - one Object is inheriting from another object - prototype changing.





### Tricky questions around concatenation?
Two strings are performing concatenation and not numeric addition
```
x = "10";
y = "10";
x+y = "1010"
```

### Code programming concepts.
- Variable declaration
- Basic Syntax - Code Syntax - set of rules
- Data Type and Structures
- Flow Control Structures - Conditionals and loops
- Functional Programming
- Object-Oriented Programming - OOP
- Debugging
- IDEs and Coding Environments
- Testing
- Variables - containers to store data value


### Object-oriented design.
Process of planning a system of interacting objects to solve the software problem.<br/>

**4 Main Pillars of OOD**
#### Abstraction
Only show necessary details to the user - convert string to lowercase letters by using ```.toLowerCase()```

#### Encapsulation
This means wrapping up data and methods together into a single unit-like class.

#### Inheritance
This means passing properties from a parent class to a child class.

#### Polymorphism
This means a child class can define its unique behavior and still share the same methods as the parent.





Call constructor, a new object, passing to _bike_.

```const bike = new Bike();``` - immutable variable

// attempt to point to the new instance of Bike

```bike = new Bike(1,2);```

// error 


### JavaScript in the browser
The browser's primary job is to act as a client for a web server.<br/>
**DOM** - Document Object Model

### The Document Object Model
**DOM** - Think of DOM as a tree


