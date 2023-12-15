<h1 align="center">Mastering the Fundamentals of JavaScript</h1>

### Overview of the Section
* **[Regular expressions](#Regular-expressions)**
* **[return statement](#return-statement)**
* **[Enhanced Object Properties](#enhanced-object-properties)**
* **[Why is JavaScript a dynamic language](#why-is-JavaScript-a-dynamic-language)**
* **[Datatypes in JavaScript](#datatypes-in-javaScript)**
* **[Undefined data type](#undefined-data-type)**
* **[null and undefined](#null-and-undefined)**
* **[Explain hoisting](#explain-hoisting)**
* **[Function and a methods](#function-and-a-methods)**
* **[Inheritance in JavaScript](#inheritance-in-javaScript)**
* **[JavaScript window.onload](#javascript-window.onload)**
* **[For loop](#for-loop)**


### 
### For loop in JavaScript
### Assignment operator in JavaScript
### p.textContent in JavaScript
document.body.appendChild in JavaScript
Bounds check in coding
### forEach method


#
### Regular expressions

Regular expressions (RegExp) in JavaScript are powerful tools for pattern matching within strings. One of the most common use cases is to validate and manipulate strings based on a specific pattern. Let me explain a simple example:

Let's say you want to check if a string contains a valid email address. The regular expression for a basic email validation can look like this:

``const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;``

Now, let's break down the components of this regular expression:

- ``^``: Asserts the start of the string.
- ``[^\s@]+``: Matches one or more characters that are not whitespace (\s) or @.
- ``@``: Matches the literal '@' symbol.
- ``[^\s@]+``: Matches one or more characters that are not whitespace (\s) or @.
- ``\.``: Matches the literal '.' character. Note that we need to escape the dot with a backslash because it's a special character in regular expressions.
- ``[^\s@]+$``: Matches one or more characters that are not whitespace (\s) or @ until the end of the string ($).

Here's how you can use this regular expression to validate an email address:

```
const validateEmail = (email) => {
  return emailRegExp.test(email);
};

// Example usage
const emailToValidate = 'example@email.com';
if (validateEmail(emailToValidate)) {
  console.log(`${emailToValidate} is a valid email address.`);
} else {
  console.log(`${emailToValidate} is not a valid email address.`);
}
```

In this example, the test method of the regular expression object is used to check if the provided email address matches the pattern. If it does, it's considered valid; otherwise, it's not.

Regular expressions might look a bit daunting at first, but once you get the hang of them, they become a powerful tool for string manipulation and validation.

**[Back To The Top](#Overview-of-the-Section)**
#

### return statement

In JavaScript, the ``return`` keyword is used within a function to specify the value that the function should return when it is called or invoked. 

When a function is executed and encounters the return statement, it immediately stops its execution, and the specified value is sent back to the code that called the function.

Here's a simple example:

```
function addNumbers(a, b) {
    var sum = a + b;
    return sum; // This is the return statement
}

var result = addNumbers(5, 7);
console.log(result); // Output: 12
```

In this example, the ``addNumbers`` function takes two parameters, ``a`` and ``b``, calculates their ``sum``, and then returns the result using the ``return`` keyword. 

When you call the function with ``addNumbers(5, 7)``, it returns the sum (12 in this case), and that value is assigned to the result variable, which is then logged to the console.

The ``return`` statement is crucial for functions to produce meaningful results that can be used elsewhere in your code. It allows you to encapsulate logic within a function and obtain the results of that logic when needed.

If a function doesn't have a ``return`` statement or the ``return`` statement doesn't specify a value, the function will return ``undefined`` by default. Additionally, it's worth noting that once a ``return`` statement is executed in a function, any code after it in the same function won't be executed.

**[Back To The Top](#Overview-of-the-Section)**
#

### Enhanced Object Properties

Enhanced Object Properties in JavaScript refer to a shorthand syntax for defining properties in object literals. This feature was introduced in ECMAScript 2015 (ES6) and provides a more concise way to create objects.

Here's an example to illustrate Enhanced Object Properties:

```
// Traditional way
let name = "Tomislav";
let age = 30;

let user = {
  name: name,
  age: age,
  greet: function() {
    console.log("Hello, " + this.name + "!");
  }
};

user.greet(); // Output: Hello, Tomislav!

// Enhanced Object Properties
let name = "Tomislav";
let age = 30;

let user = {
  name,
  age,
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

user.greet(); // Output: Hello, Tomislav!
```
In this example:

Instead of repeating the property names ``(name: name, age: age)``, you can directly use the variable names as property names when they have the same name.

The method ``greet`` is defined using the concise method syntax, which is a shorter way of writing functions in objects.

**[Back To The Top](#Overview-of-the-Section)**
#

### Why is JavaScript a dynamic language
JavaScript is considered a dynamic language because its type system is dynamically checked. 
This means that the type of a variable is not determined until the program is running, and can change throughout the program's execution. 

### Datatypes in JavaScript
- **Primitive:** ``string``, ``number``, ``null``, ``undefined``, ``bolean``, ``big int``, ``symbol``
- **Objects:** ``new Object()``

### Undefined data type
The Variable is declared but there is no value assigned to the variable.

### null and undefined
- ``undefined``: variable is created but the value is not defined.
- ``null``: variable is created and the value is null - indicating an absence of data.

### Explain hoisting
The mechanism where variables and functions declaration is moved to the top of the scope before code executes.

**[Back To The Top](#Overview-of-the-Section)**
#
### Function and a methods
#### Difference between function and a method in JavaScript
In JavaScript, the terms ``function`` and ``method`` are often used interchangeably, but there is a subtle difference between the two.

#### Function

A function is a block of code that performs a specific task. It takes some input, performs some operations, and produces some output. Functions can be defined without any association with an object. 
They are independent entities that can be called directly or passed as arguments to another function.

#### Method

A method is a special type of function that is associated with an object. It belongs to a class or instance of a class and operates on the data and properties of that object. When you call a method on an object, the method gets access to the object's properties and can modify or access them as needed.

In essence, a method is a function that has a special relationship with an object. It belongs to the object's scope and can directly interact with the object's data.

#### Key Differences

Here's a table summarizing the key differences between functions and methods:

| Feature |		Function |	Method |
| ---------- | ---------------- | -------------|
| Scope		 |	Independent 				| Belongs to an object  |
| Calling syntax	     |	Called directly or passed as an argument  			| Called on an object |
| Access to object data			 | No direct access  			| Direct access to object properties |

### Code Examples:

```
// Function
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet('Bard'); // Output: Hello, Bard

// Method
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const person = new Person('Alice');
person.sayHi(); // Output: Hi, my name is Alice
```

**[Back To The Top](#Overview-of-the-Section)**
#

### Inheritance in JavaScript
#### Can we do inheritance in JavaScript
Yes, JavaScript supports inheritance through a mechanism called prototype chaining. 
This means that a child object inherits the properties and methods of its parent object. 

The prototype chain is a linked list of objects, where each object's proto property points to the object that it inherits from. This allows objects to inherit properties and methods from multiple ancestors.

Example of inheritance in JavaScript using prototype chaining:

```
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

function Student(name, major) {
  Person.call(this, name); // Invoke the constructor of the parent class (Person)
  this.major = major;
}

Student.prototype = Object.create(Person.prototype); // Inherit properties and methods from Person
Student.prototype.constructor = Student; // Set the constructor of the instance to Student

const student1 = new Student('John', 'Computer Science');
console.log(student1.greet());  // Output: Hello, my name is John
```
**[Back To The Top](#Overview-of-the-Section)**
#


### JavaScript window.onload 
#### What is meaning of this line in JavaScript: ``window.onload = printResult;``

In JavaScript, the line window.onload = printResult; is used to assign the printResult function to the onload event of the window object. 

The onload event is triggered when the entire web page, including all its assets like images and stylesheets, has finished loading.

Here's a breakdown of the line:

- ``window``: This refers to the global object representing the browser window.
- ``.onload``: This is an event handler that specifies a function to run when the load event occurs.
``= printResult;`` : This assigns the printResult function to the onload event, meaning that printResult will be executed when the page finishes loading.

If you have the printResult function defined elsewhere in your JavaScript code, it will be called once the entire page has loaded.


### Variables scoping
#### Explain variables scoping - ``let`` vs. ``var`` and vs ``const`` with examples in JavaScript?
Variable scoping is a crucial concept in JavaScript that defines the accessibility and lifespan of variables within a program. 

In JavaScript, there are three keywords used for variable declaration: ``var``, ``let``, and ``const``. Each of these has different scoping rules.

1. ``var`` :

- Variables declared with ``var`` are function-scoped, meaning they are only accessible within the function in which they are declared.
- If a variable is declared with var outside any function, it becomes a global variable.
- Variables declared with ``var`` are hoisted to the top of their scope during the compilation phase.
```
function example() {
    if (true) {
        var x = 10;
        console.log(x); // 10
    }
    console.log(x); // 10
}
```

2. ``let`` :
- Variables declared with ``let`` are block-scoped, meaning they are limited to the block (enclosed by curly braces) in which they are defined.
- ``let`` variables are not hoisted to the top of their scope. They are only accessible after the point of declaration.

```
function example() {
    if (true) {
        let y = 20;
        console.log(y); // 20
    }
    // console.log(y); // Error: y is not defined
}
```

3. ``const`` :
- Variables declared with const are also block-scoped.
- ``const`` variables must be assigned a value at the time of declaration, and their value cannot be reassigned.

```
function example() {
    const z = 30;
    // z = 40; // Error: Assignment to a constant variable
    console.log(z); // 30
}
```

In summary, ``var`` has function scope, ``let`` and ``const`` have block scope. ``let`` allows reassignment, while ``const`` does not. 

It's generally recommended to use ``const`` by default and only use ``let`` when you know the variable will be reassigned. This helps in writing more robust and predictable code.

**[Back To The Top](#Overview-of-the-Section)**
#

### For loop in JavaScript
The ``for`` loop in JavaScript is used to repeatedly execute a block of code as long as a specified condition is true. 
It consists of three parts: initialization, condition, and increment/decrement.

Here is the basic syntax of a for loop:

```
for (initialization; condition; increment/decrement) {
    // code to be executed
}
```
1. **Initialization:** This is where you initialize the loop variable.
```
// Example 1: Loop from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

2. **Condition:** The loop will continue as long as this condition is true. If it evaluates to false, the loop will exit.

```
// Example 2: Loop while a condition is met
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i); // Print even numbers
    }
}
```

3. **Increment/Decrement:** This part is responsible for changing the loop variable after each iteration.

```
// Example 3: Loop with decrement
for (let i = 5; i > 0; i--) {
    console.log(i); // Print numbers from 5 to 1
}
```

The for loop is flexible, and you can combine different types of conditions, increments, and decrements based on your requirements.

**[Back To The Top](#Overview-of-the-Section)**
#

### Assignment operator in JavaScript
#### What is the meaning of ``+=`` in JavaScript

``+=`` is an assignment operator that adds the value on the right-hand side of the operator to the variable on the left-hand side and then assigns the result to the variable. 
It is a shorthand for performing addition and assignment in a single step.

Here's an example to illustrate the usage of ``+=``:
```
let x = 5;

// Using +=
x += 3; // Equivalent to x = x + 3;

console.log(x); // Output: 8
```
**[Back To The Top](#Overview-of-the-Section)**
#

### p.textContent in JavaScript
#### What is the meaning of ``p.textContent`` in JavaScript?

``p.textContent`` refers to the text content of an HTML element represented by the variable ``p``. 
This is commonly used when working with the Document Object Model (DOM) to manipulate the text content of an HTML element.

Here's an example:
```
// Assuming you have an HTML paragraph element with the ID 'myParagraph'
let p = document.getElementById('myParagraph');

// Getting the text content
let textContent = p.textContent;
console.log(textContent);  // This will log the current text content of the paragraph element

// Setting the text content
p.textContent = 'New text content';
```
In this example, ``p.textContent`` is used to both retrieve the current text content of the paragraph element and set a new text content. 

This is a common technique when you want to dynamically change the text content of an HTML element using JavaScript.

**[Back To The Top](#Overview-of-the-Section)**
#

### document.body.appendChild in JavaScript
#### What is the meaning of ``document.body.appendChild(p);`` in JavaScript?
The code document.body.appendChild(p); is used to append an HTML element to the end of the ``<body>`` element in a web page. 

Let's break down the code:
- ``document``: This is the global object representing the entire HTML document.
- ``body``: This is a property of the document object that represents the ``<body>`` element of the HTML document. 
The <body> element is where the content of the HTML document is placed, such as text, images, links, scripts, etc

- ``appendChild(p)``: This is a method of the ``<body>`` element (or any other parent element). It is used to append a child element to the end of the list of children of the parent element. In this case, the child element being appended is represented by the variable ``p``.

Putting it all together:

```
// Assuming you have a paragraph element created or obtained somewhere in your code
let p = document.createElement('p');
p.textContent = 'This is a new paragraph.';

// Appending the paragraph element to the body
document.body.appendChild(p);
```
In this example:
1. A new paragraph element ``(<p>)`` is created using ``document.createElement('p')``.
2. The text content of the paragraph is set to ``'This is a new paragraph.'`` using ``p.textContent``.
3. The paragraph element ``(p)`` is appended to the end of the ``<body>`` element using document.``body.appendChild(p)``.

**[Back To The Top](#Overview-of-the-Section)**
#

### Bounds check in coding
#### What is the meaning of the "bounds check" in coding and JavaScript?

In programming, a "bounds check" refers to the practice of verifying whether an index or a variable falls within the acceptable range of values before attempting to access or modify the corresponding memory location.

In the context of JavaScript, arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on. 

A bounds check in JavaScript involves ensuring that when you access an element in an array, the index you're using is within the valid range for that array.

```
let myArray = [1, 2, 3, 4, 5];
let indexToCheck = 3;

// Performing a bounds check
if (indexToCheck >= 0 && indexToCheck < myArray.length) {
    let element = myArray[indexToCheck];
    console.log("Element at index", indexToCheck, "is", element);
} else {
    console.log("Index out of bounds");
}
```
**[Back To The Top](#Overview-of-the-Section)**
#

### forEach method

In JavaScript, the ``forEach`` method is used to iterate over elements in an array.
It executes a provided function once for each array element. 

The basic syntax is as follows:
```
array.forEach(function(currentValue, index, array) {
  // code to be executed for each element
});
```

Let me break down the parameters:

- ``currentValue`` : The current element being processed in the array.
- ``index`` : The index of the current element.
- ``array`` : The array on which forEach was called.

Here's a simple example to illustrate its usage:

```
// Sample array
const numbers = [1, 2, 3, 4, 5];

// Using forEach to log each element and its index
numbers.forEach(function(number, index) {
  console.log(`Element at index ${index}: ${number}`);
});
```

In this example, the provided function will be executed for each element in the numbers array. It will log the element and its corresponding index.

Remember, forEach is a great choice when you want to perform an operation on each element of an array without creating a new array. 

If you need to transform the elements and create a new array, you might consider using methods like ``map()``.

**[Back To The Top](#Overview-of-the-Section)**
#