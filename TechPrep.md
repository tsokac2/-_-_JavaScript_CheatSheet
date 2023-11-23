<h1 align="center">JavaScript General Knowledge Questions</h1>

### Overview of the Section
* **[Script tag in HTML](#Script-tag-in-HTML)**
* **[JavaScript window.onload](#JavaScript-window.onload)**

#

### Script tag in HTML - - Why we are placing ``<script>`` tag on the bottom and what is the best practice?

Placing the ``<script>`` tag at the bottom of the HTML document, just before the closing ``</body>`` tag, is a best practice in web development.

This practice is primarily employed to enhance the performance and loading speed of web pages. Here are a few reasons why this is considered a good practice:

#### Faster Page Rendering 
When a browser encounters a ``<script>`` tag, it typically stops rendering the rest of the page until the script is loaded and executed.

By placing scripts at the bottom, you allow the browser to render the content of the page first. This gives users the perception that the page is loading quickly.


#### Parallel Downloads 
Browsers download external resources, like scripts, in parallel. 
Placing scripts at the bottom allows other critical resources, such as stylesheets and images, to be downloaded concurrently. This can significantly improve overall page load times.

#### Improved User Experience
Users see the content of the page sooner, which improves the overall user experience. Especially for users on slower internet connections or devices, the perceived performance is better.

#### Search Engine Optimization (SEO)
While search engines have become more sophisticated in handling JavaScript, placing scripts at the bottom can still be beneficial for SEO. 

Search engines prioritize the content at the top of the page, so having it load faster can positively impact search rankings.

**[Back To The Top](#Overview-of-the-Section)**
#

### Basic regular expressions in JavaScript

#### Matching Digits:
```
var digitRegex = /\d/;
var result = digitRegex.test("Hello123");
// Result: true (as it matches the digit '1')
```
- /\d/ matches any digit (0-9).
- test method checks if the pattern is present in the given string.
- In the example, it returns true because the digit '1' is present in "Hello123".

#### Matching Word Characters:
```
var wordRegex = /\w/;
var result = wordRegex.test("Hello123");
// Result: true (as it matches the letter 'H')
```
- ``/\w/`` matches any word character (alphanumeric + underscore).
- In the example, it returns true as it matches the first character ``'H'`` in ``"Hello123"``.

#### Matching Whitespaces:
```
var spaceRegex = /\s/;
var result = spaceRegex.test("Hello 123");
// Result: true (as it matches the space character)
```
- ``/\s/`` matches any whitespace character (spaces, tabs, line breaks).
- In the example, it returns true because there is a space between ``'Hello'`` and ``'123'``.

#### Matching a Specific Word:
```
var specificWordRegex = /hello/;
var result = specificWordRegex.test("Hello World");
// Result: false (case-sensitive, doesn't match 'Hello')
```
- ``/hello/`` matches the exact string 'hello' in a case-sensitive manner.
- In the example, it returns false because it doesn't match the capitalized ``'Hello'``.

#### Matching Email Format:
```
var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var result = emailRegex.test("test@example.com");
// Result: true (as it matches the email format)
```
- ````/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/``` checks for a basic email format.
- It starts ``(^)`` with one or more word characters, followed by ``'@'``, domain name, dot, and 2 to 3 letters.
- In the example, it returns true as ``"test@example.com"`` matches the pattern.

#### Matching Repetition:
```
var repetitionRegex = /\d{3}/;
var result = repetitionRegex.test("Hello123");
// Result: true (as it matches three consecutive digits '123')
```
- ``/\d{3}/`` matches exactly three consecutive digits.
- In the example, it returns true because '123' appears in the string.

#### Matching Anything (Wildcard):
```
var wildcardRegex = /./;
var result = wildcardRegex.test("Hello123");
// Result: true (as it matches any character)
```
- ``.`` matches any single character (except newline).
- In the example, it returns true as ``'H'`` (the first character) matches the pattern.

#### Matching the Start of a String:
```
var startRegex = /^Hello/;
var result = startRegex.test("Hello World");
// Result: true (as it matches the start of the string)
```
- ``/^Hello/`` matches the string that starts with ``'Hello'``.
- In the example, it returns true because ``"Hello World"`` starts with ``'Hello'``.

#### Matching the End of a String:
```
var endRegex = /World$/;
var result = endRegex.test("Hello World");
// Result: true (as it matches the end of the string)
```
- ``/World$/`` matches the string that ends with ``'World'``.
- In the example, it returns true because "Hello World" ends with ``'World'``.

**[Back To The Top](#Overview-of-the-Section)**
#

### JavaScript window.onload - What is meaning of this line in JavaScript: ``window.onload = printResult;``

In JavaScript, the line window.onload = printResult; is used to assign the printResult function to the onload event of the window object. 

The onload event is triggered when the entire web page, including all its assets like images and stylesheets, has finished loading.

Here's a breakdown of the line:

- ``window``: This refers to the global object representing the browser window.
- ``.onload``: This is an event handler that specifies a function to run when the load event occurs.
``= printResult;`` : This assigns the printResult function to the onload event, meaning that printResult will be executed when the page finishes loading.

If you have the printResult function defined elsewhere in your JavaScript code, it will be called once the entire page has loaded.


### Explain variables scoping - let vs. var and vs const  with examples in JavaScript?
Variable scoping is a crucial concept in JavaScript that defines the accessibility and lifespan of variables within a program. 

In JavaScript, there are three keywords used for variable declaration: var, let, and const. Each of these has different scoping rules.

``var`` :

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

``let`` :
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

``const`` :
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

### ``for`` loop in JavaScript
The for loop in JavaScript is used to repeatedly execute a block of code as long as a specified condition is true. 
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

### What is the meaning of ``+=`` in JavaScript?

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

### What is the meaning of ``p.textContent`` in JavaScript?

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

### What is the meaning of ``document.body.appendChild(p);`` in JavaScript?
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
### What is the meaning of the "bounds check" in coding and JavaScript?

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

### ``forEach()`` method

In JavaScript, the forEach method is used to iterate over elements in an array.
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
 
### ``join()`` method

In JavaScript, the join method is used to concatenate the elements of an array into a single string. The elements are separated by a specified separator. The basic syntax is as follows:

```
const numArr = ["sa", "lo", "n", "i"];
console.log(numArr.join(","));
// returns - sa,lo,n,i - converts arry into string
```

**[Back To The Top](#Overview-of-the-Section)**
#
