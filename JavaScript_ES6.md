<h1 align="center">JavaScript ECMAScript 6</h1>

### Overview of the Section
* **[What is ES6?](#What-is-ES6?)**
* **[let and const Declarations](#let-and-const-Declarations)**
* **[Arrow Functions](#Arrow-Functions)**
* **[Template Literals](#template-literals)**
* **[Default Parameters](#default-parameters)**
* **[Destructuring Assignment](#destructuring-assignment)**





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

Destructuring Assignment