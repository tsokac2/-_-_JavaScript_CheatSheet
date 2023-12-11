<h1 align="center">Mastering the Fundamentals of JavaScript</h1>

### Overview of the Section
* **[Regular expressions](#Regular-expressions)**
* **[return statement](#return-statement)**
* **[Enhanced Object Properties](#enhanced-object-properties)**
* **[Why is JavaScript a dynamic language](#why-is-JavaScript-a-dynamic-language)**
* **[How does JavaScript determine data types](#how-does-JavaScript-determine-data-types)**


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
Data types of the variable can change during the runtime and JavaScript will not complain about it.

### How does JavaScript determine data types?
By looking at the values during the runtime.