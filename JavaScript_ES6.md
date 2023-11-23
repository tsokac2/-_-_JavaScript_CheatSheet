<h1 align="center">JavaScript ECMAScript 6</h1>

### Overview of the Section
* **[What is ES6?](#What-is-ES6?)**
* **[let and const Declarations](#let-and-const-Declarations)**


#
### What is ES6?
ECMAScript 6, also known as ES6 or ECMAScript 2015, is a major update to the JavaScript programming language. It introduced several new features and syntax enhancements to make JavaScript code more expressive and maintainable.
#
### 

**[Back To The Top](#Overview-of-the-Section)**

### let and const Declarations
ES6 introduced the ``let`` and ``const`` keywords for variable declarations. ``let`` allows for block-scoped variables, while const is used for constants, whose values cannot be reassigned.

#### Use of ```let``` and ```const``` in JavaScript?
Different ways of creating variables. <br/>
Keywords```let``` and ```const```  introduced in ES6.<br/>
```const``` - immutable variables <br/>
```let``` - used to create mutable variables.

#### Explain constants in ES6?
Also are known as immutable variables  - ```const strLength =  10;```<br/>
Enable protection to overwrite a variable value.

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
| var | functions | yes |
| let | block | yes |
| const | block | no |