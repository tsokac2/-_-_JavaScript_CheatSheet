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


TechPrep

GENERAL IT KNOWLEDGE

### What’s the difference between the initial HTML download of a page and the DOM?

	This initial HTML download is the raw markup of the page, including elements like headings, paragraphs, images, links, and other structural components. 
	This process is often referred to as "rendering" the HTML, fetch from the webpage server.

	DOM Document Object Model

	In summary, the initial HTML download is the static content retrieved from the server, 
	while the DOM is a dynamic, in-memory representation of that content that can be manipulated and interacted with using client-side scripting.


### What does this regular expression do? 
\ d+someText$
    * \d+ matches one or more digits. The '+' means "one or more times."
    * someText matches the exact sequence of characters "someText".
    * $ asserts that we are at the end of the line or string.

In summary, the regular expression /\d+someText$/ will successfully match a string if it ends with one or more digits followed by the exact sequence "someText". Here are some examples to illustrate when the regex would and wouldn't match:
* Matches:
    * 123someText
    * 456789someText
* Doesn't Match:
    * 123someText456 (because "someText" is not at the end)
    * someText789 (because there are no digits before "someText")
    * abcSomeText (because there are no digits before "someText")


### 3 What does it mean when <script> element in javascript has an “async” attribute?

	When a <script> element has an async attribute, it means that the script will be executed asynchronously with the rest of the page..
	When the browser encounters a script with the async attribute, it doesn't stop parsing the page. It continues to build the Document Object Model (DOM).

### 4 What does it mean when <script> element in javascript has “defer” attribute?

	The defer attribute in a JavaScript <script> tag specifies that the script is executed when the page has finished parsing. 
	Here's how it works:

    1. When a script tag has the defer attribute, the browser continues to build the Document Object Model (DOM) without pausing. This is similar to the async attribute. 
    2. However, unlike async scripts, defer scripts guarantee the execution order. They will execute in the order they are declared in the file. 
    3. The script starts downloading immediately but only executes after the HTML parsing is complete and in the order of their appearance in the page. 
	More info here: https://airbnb.stackenterprise.co/questions/69274

### 5 What does DNS do?

	Domain Name System 

	Translates human-readable domain names, like www.example.com, into machine-readable IP addresses, such as 192.168.1.1. 
	This process is essential because computers and networking devices use IP(Internet Protocol) addresses to identify each other on the internet.

	DNS makes it easier for us to navigate the web because it's easier for people to remember names like “publift.com” rather than IP addresses like 172.217.5.238.

#### 6 In DNS, what is the TTL attribute?

	"Time to Live" - It is time until the record is re-resolved - specifies the amount of time the record is allowed to be cached by a DNS resolver.

### 7 What is a MAC address?

	Media Access Control address, is a unique identifier assigned to a network interface controller (NIC) 
	Identifier of a network controller  - Digital fingerprint for your device's networking equipment - phone, laptop, desktop, printer etc

### 8 What is TLS/SSL?

	Way to secure connection between the computers
	TLS-Transport Layer Security, and its predecessor, SSL-Secure Sockets Layer, are cryptographic protocols designed to provide communications security over a network.

### 9 What is a first party cookie?

	Set by the script running on the main domain that you are visiting. 
	A first-party cookie is a type of cookie that is created and set by the website you are currently visiting. 
	These cookies are generated by the domain (or site) you are directly interacting with and are typically used to enhance the user experience by remembering your preferences, login information, or other settings.

#### 9 What is a 3rd party cookie?

Explains that is’s a cookie set by a script loaded from a 3rd party domain

	Third-party cookies are created by domains other than the one you are currently visiting. Basic loaded from the 3rd party domain and not from the one you are visiting.
	For example, if you are on "example.com," a third-party cookie may be set by a domain like "advertiser.com."


### 10 In SQL, what is the difference between an inner and left join?

TOP Answer
Explains that an inner join returns only rows on the main table where…

* Inner Join (or simply Join): An inner join returns only the rows where there is a match between the columns being joined in both tables. If there is a row in the first table that does not have a corresponding match in the second table, it is not included in the result set. 
* Left Join (or Left Outer Join): A left join returns all the rows from the first (left) table and any matching rows from the second table. If there is no match, the result for the second table's fields is NULL. Essentially, it includes all records from the first table regardless if there is a matching record in the second table. 



### 11 What is the default HTTP port?

TOP Answer
80

	80 - HTTP (Hypertext Transfer Protocol) is port 80
	443 - HTTPS (HTTP Secure), the default port is 443. This protocol uses encryption (like SSL or TLS) to secure the connection between the client and server.


### How much data is downloaded when you visit any website?

TOP Answer
Opens dev tools, looks at transfer data

	To get the total amount of data transferred during page load, look at the bottom of the Network tab, where it shows the total data transferred and the time it took to load.


### Can you block the jQuery script from loading?

Opens the network tab, finds jquery and blocks it

    1. Find the script file you want to block in the list of network requests and click on it. Scripts can generally be found under the "JS" type.
    2. In the panel that opens at the bottom, select the "Headers" tab.
    3. Right-click on the "Request URL" and choose "Block request URL".

### How do you view the cookies set by a script?

TOP Answer
Opens Applications Tab

    1. In the side menu under the "Application" tab, look for "Cookies" under the "Storage" section.
    2. Click on "Cookies" and it will display a dropdown with the list of sources of cookies. The first one, corresponding to your domain, is generally the site you're currently on. The others are third party cookies.

### Show the initial HTML download for website in devTools

TOP Answer
Opens the Network Tab, scrolls to the top, pick the first item, Select Doc - check for the “www.ozbargain.com.au”  - click Preview
Alternatively, view page source

    * In the "Network" tab, look for a column labeled "Type" or similar. Click on it to sort the resources by type.
    * Locate the resource that corresponds to the HTML document. It's often labeled as "document" or "text/html."
    * Right click - View Page Source

### Show the DOM for a webpage in the devTools

TOP Answer
Select the Elements Tab in the dev console

### How do you find an item in the DOM corresponding to an element on the page

TOP Answer
Uses the CHROME selector to highlight an element

	Open your browser's Developer Tools and navigate to the "Elements" or "Inspector" tab.

### By examining the DOM, how can we figure out wich script on the page is ultimately responsible for loading the ads?

TOP Answer
Notices the repeated reference to the word fuse in the attributes and search by the fuse word in the Network Tab.

    Right click on the ad “Inspect”
    Find a parent element
    Find the “date-fuse” attribute - probably custom created by the some internal framework
    On the network settings filter by “JS”, clear the console and refresh the page
    Find fuse.js and block the script - the ads should not load



### Of the total data downloaded, how much is attribute ti ads?

TOP Answer
Realise that resources might be cached  - disk cache

	Check the size table for the specific script - (disk cache) - Disk caching is a mechanism used by web browsers to store copies 
	of resources locally on a user's device after they have been downloaded from the web server for the first time.

Direct link: https://codepen.io/pen?template=767058178534e5314e043c25dff541d3 

### Make the heading Blue rather that Red?

Best answer - create class .head

.head {
  color:blue;
}

______________________

### Can you explain why the first paragraph is no appearing?


 	- check for the display:none for each class in that element

	In CSS, the display: none; property-value combination is used to hide an element from the document layout. 	
	When an element is marked with display: none;, it is completely removed from the flow of the webpage. 

	This means it takes up no space, unlike with visibility: hidden;, where the element is rendered invisible but still takes up space in the layout.

	Unlike visibility: hidden;, display: none; cannot be overridden with CSS pseudoclasses like :hover. 

	This makes display: none; useful for permanently hiding elements on the page.

Direct link for Code-pen:  https://codepen.io/pen?template=e93926064823a1fd6a0a8cbbbd571755


### Can you fix the bug causing the numbers array to not calculate?

TOP Answer
Confidently diagnoses and fixes the bounds check 

for (let i = 0; i <= numbers.length; i++) {

For loop is counting the [i] index numbers of the array not a actual length of the army items?


### Can you return a better error in the case where the array is empty? 

TOP Answer
Write better error message in the empty array.
Replace ‘description’ parameter with the following:

let examples = 

[
 	{ params: [1,2,3,4,5], descriptions: ‘Numbers array' },
 	{ params: [], descriptions: 'Invalid input. Please provide an array of valid numbers.' },
 	{ params: [“a”, “b”, “c”], descriptions: 'Invalid input. Invalid array with strings’ }
]


Direct link for Code-pen:  https://codepen.io/pen?template=06afadeed8a0194c8bac3d19b9351d05 

### Can you find and fix the bug in the calculator?

TOP Answer
Is able to confidently fix the problem without a google search

Code line with issue: document.form.textview.value = num;
Solution: document.form.textview.value += num; // add the “+” after =

### Can you extend the calculator to allow the entry of opening and closing brackets? 

TOP Answer
Lay out the buttons neatly and without prompting 

### Can you give an example of a math expression where brackets change the result?

TOP Answer
Enters a suitable expression in the calculator input field  - e.g. 3*(5+3)