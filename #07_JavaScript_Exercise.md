

### 1. What is a potential pitfall with using ``typeof bar === "object"`` to determine if ``bar`` is an object? How can this pitfall be avoided?

#### Answer
Although typeof ``bar === "object"`` is a reliable way of checking if bar is an object, the surprising gotcha in JavaScript is that ``null`` is also considered an object!

Therefore, the following code will, to the surprise of most developers, log ``true (not false)`` to the console:
```
var bar = null;
console.log(typeof bar === "object");  // logs true!
```
#
### 2. What will the code below output to the console and why?
```
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```
#### Answer
In fact, ``var a = b = 3;`` is actually shorthand for:
```
b = 3;
var a = b;
```
**But how can b be defined outside of the scope of the enclosing function?** Well, since the statement ``var a = b = 3;`` is shorthand for the statements ``b = 3;`` and ``var a = b;``, ``b`` ends up being a global variable (since it is not preceded by the ``var`` keyword) and is therefore still in scope even outside of the enclosing function.

``use strict`` - Declared inside a function, it has local scope (only the code inside the function is in strict mode):
```
x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}
```

#
### 3. What will the code below output to the console and why?
```
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```
#### Answer
```
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
```
In the outer function, both ``this`` and ``self`` refer to ``myObject`` and therefore both can properly reference and access ``foo``.

In the inner function, though, ``this`` no longer refers to ``myObject``. As a result, ``this.foo`` is undefined in the inner function, whereas the reference to the local variable ``self`` remains in scope and is accessible there.

#
### 4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). 

This technique creates a **closure** around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid **potential name clashes between different JavaScript modules** and libraries.

#
### 5. What is the significance, and what are the benefits, of including ``'use strict'`` at the beginning of a JavaScript source file?

The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. 

Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.


#
### 6. Consider the two functions below. Will they both return the same thing? Why or why not?

```
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```
#### Answer
```
foo1 returns:
Object {bar: "hello"}
foo2 returns:
undefined 
```
Not only is this surprising, but what makes this particularly gnarly is that ``foo2()`` returns undefined without any error being thrown.

The reason for this has to do with the fact that semicolons are technically optional in JavaScript (although omitting them is generally really bad form).

As a result, when the line containing the return statement (with nothing else on the line) is encountered in ``foo2()``, a semicolon is automatically inserted immediately after the return statement.
#
### 7. What will the code below output? Explain your answer.
```
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

#### Answer

```
0.30000000000000004
false
```
An educated answer to this question would simply be:

“You can’t be sure. it might print out ``0.3`` and ``true``, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.”

#
### 8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

#### Answer
```
1
4
3
2
```
Let’s first explain the parts of this that are presumably more obvious:

- ``1`` and ``4`` are displayed first since they are logged by simple calls to ``console.log()`` without any delay

- ``2`` is displayed after ``3`` because ``2`` is being logged after a delay of ``1000 msecs (i.e., 1 second)`` whereas ``3`` is being logged after a delay of ``0 msecs``.

OK, fine. But if ``3`` is being logged after a delay of ``0 msecs``, doesn’t that mean that it is being logged right away? And, if so, shouldn’t it be logged before ``4``, since ``4`` is being logged by a later line of code?

The answer has to do with properly understanding **[JavaScript events and timing](https://javascript.info/settimeout-setinterval)**.

#
### 9. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a [palindrome](https://www.palindromelist.net/).

**Palindrome**: a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction.
- checks if the modified string is equal to its reverse.

#### Answer
```
const isPalindrome = str => {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
};

console.log(isPalindrome("ana")); //true
console.log(isPalindrome("Anas")); // false
console.log(isPalindrome("levels")); // levels
console.log(isPalindrome("level")); // level
```

#
### 10. Write a ``sum`` method which will work properly when invoked using either syntax below.
```
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
```

#### Answer
```
function sum(x,y) {
  if( y !== undefined){
    return x + y;
    
  } else {
    
    return function(y) {return x + y;};
  }
}
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
```

1. **Binary Addition (if y is provided)**:
- When both ``x`` and ``y`` are provided as arguments, the function returns the sum of the two values ``(x + y)``.
- Example: ``sum(2, 3)`` would return ``5``.

2. **Curried Addition (if y is not provided)**:
- If only one argument ``(x)`` is provided, it returns a new function that expects the second argument ``(y)``.
- This is known as currying, a technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.
- Example: ``sum(2)(3)`` would also return ``5``. The first invocation returns a function that adds ``3`` to its argument, and the second invocation supplies ``4`` as that argument.

#
### 11. Consider the following code snippet:
```
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```
- **(a)** What gets logged to the console when the user clicks on ``“Button 4”`` and why?

- **(b)** Provide one or more alternate implementations that will work as expected.

#### Answer
**(a)**

- No matter what button the user clicks the number 5 will always be logged to the console. 
- This is because, at the point that the ``onclick`` method is invoked (for any of the buttons), the for loop has already completed and the variable ``i`` already has a value of 5.

**(b)**

The simplest solution, if you’re in an ``ES6/ES2015`` context, is to use ``let i`` instead of ``var i``:
```
for (let i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```
#
### 12. Assuming d is an “empty” object in scope, say:
``var d = {};``

### …what is accomplished using the following code?
```
['zebra', 'horse'].forEach(function(k) {
	d[k] = undefined;
});
```

#### Answer
The snippet of code shown above sets two properties on the object ``d``. Ideally, any lookup performed on a JavaScript object with an unset key evaluates to ``undefined``. But running this code marks those properties as “own properties” of the object.

```
console.log(d.zebar); // undefined
console.log(d.horse); // undefined
```
#
### 13. What will the code below output to the console and why?
```
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
```
#### Answer
The logged output will be:
```
"array 1: length=5 last=j,o,n,e,s"
"array 2: length=5 last=j,o,n,e,s"
```
#
### 14. What will the code below output to the console and why?
```
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
```

#### Answer
```
console.log(1 + "2" + "2"); // "122"
console.log(1 +  +"2" + "2"); // "32":  "+2" converting to a integer, 1 + 2 + "2" = 32
console.log(1 +  -"1" + "2"); // "02"
console.log(+"1" +  "1" + "2"); // "112"
console.log( "A" - "B" + "2"); // "NaN2"
console.log( "A" - "B" + 2); // NaN
```

#
### 15. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

```
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
```

#### Answer
```
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};
```
The stack overflow is eliminated because the event loop handles the recursion, not the call stack. 

When ``nextListItem`` runs, if ``item`` is not null, the timeout function ``(nextListItem)`` is pushed to the event queue and the function exits, thereby leaving the call stack clear. 

When the event queue runs its timed-out event, the next ``item`` is processed and a timer is set to again invoke ``nextListItem``. 

Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations.


#
### 16. What is a “closure” in JavaScript? Provide an example.

A closure is an **inner function** that has access to the variables in the outer (enclosing) function’s scope chain. 

The closure has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.

Here is an example:

```
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
```

In the above example, variables from ``innerFunc``, ``outerFunc``, and the global namespace are all in scope in the ``innerFunc``. The above code will therefore produce the following output:

```
outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz
```
#
### 17. What would the following lines of code output to the console?

```
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
```
#### Explain your answer.
```
0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2
```
**Key Points**:

- **|| (OR) operator**: Returns the first truthy operand or the last operand if both are falsy.
- **&& (AND) operator**: Returns the first falsy operand or the last operand if both are truthy.
- **JavaScript considers ``0``, ``"" (empty string)``, ``null``, ``undefined``, ``NaN``, and ``false`` as **falsy** values. All other values are considered truthy.
- **The right operand in ``||`` and ``&&`` might not be evaluated depending on the first operand's truthiness, a concept called short-circuiting.

#
### 18.What will be the output when the following code is executed? Explain.
```
console.log(false == '0')
console.log(false === '0')
```
#### Answer
```
true
false
```
1. ``console.log(false == '0')`` will output true.

- The ``==`` operator performs loose equality comparison.
- It attempts to coerce values to a common type before comparison.
- In this case, it coerces ``false`` to ``0`` (because ``false`` is considered a "falsy" value in JavaScript) and ``'0'`` to the number 0.
- Since both values become ``0`` after coercion, they are considered equal, resulting in ``true``
.
2. ``console.log(false === '0')`` will output false.

- The ``===`` operator performs strict equality comparison.
- It checks for both value and type equality.
- In this case, ``false`` is a boolean, and ``'0'`` is a string, so they have different types, resulting in ``false``.
#
### 19. What is the output out of the following code? Explain your answer.

```
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
```
#### Answer
The output of this code will be ``456 (not 123)``.

Here's a breakdown of why this happens:

1. **Object Property Names**: In JavaScript, object property names must be strings or Symbols. When you try to use an object like ``b`` or ``c`` as a key, JavaScript implicitly converts it to a string using the ``toString()`` method.

2. **Object toString()**: The default ``toString()`` method for objects returns ``[object Object]``. So, when you assign ``a[b] = 123 and a[c] = 456``, both assignments are essentially using the same key, ``[object Object]``.

3. **Overwriting**: Therefore, the second assignment ``(a[c] = 456)`` overwrites the value of the first assignment ``(a[b] = 123)`` because they both use the same string key.

4. **Final Output**: When you ``console.log(a[b])``, you're essentially retrieving the value associated with the ``key [object Object]``, which is ``456`` after the last assignment.

**Key Points**:
- **Implicit Conversion**: JavaScript automatically converts non-string keys to strings when used in object property assignments.
- **toString() Behavior**: The default ``toString()`` method for objects typically returns ``[object Object]``.
- **Overwriting Values**: Assigning values to the same key (even if using different objects that stringify to the same value) overwrites the existing value.

**To avoid this behavior**:

- **Use Strings as Keys**: If you want to use distinct keys, it's better to use actual strings or Symbols as property names.
- **Consider Maps**: If you need to use objects as keys, you can use a ``Map`` object, which is designed to handle arbitrary keys, including objects.

#
### 20. What will the following code output to the console:
``console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));``

#### Answer

The code will output the value of 10 factorial ``(i.e., 10!, or 3,628,800)``.

Here’s why:

The named function ``f()`` calls itself recursively, until it gets down to calling ``f(1)`` which simply returns ``1``. 

Here, therefore, is what this does:
```
f(1): returns n, which is 1
f(2): returns 2 * f(1), which is 2
f(3): returns 3 * f(2), which is 6
f(4): returns 4 * f(3), which is 24
f(5): returns 5 * f(4), which is 120
f(6): returns 6 * f(5), which is 720
f(7): returns 7 * f(6), which is 5040
f(8): returns 8 * f(7), which is 40320
f(9): returns 9 * f(8), which is 362880
f(10): returns 10 * f(9), which is 3628800
```

#
### 21. Consider the code snippet below. What will the console output be and why?
```
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
```

#### Answer

The output will be ``1``, even though the value of ``x`` is never set in the inner function.

**Here’s why**:
A closure is a function, along with all variables or functions that were in-scope at the time that the closure was created. 

In JavaScript, a closure is implemented as an “inner function”; i.e., a function defined within the body of another function. An important feature of closures is that an inner function still has access to the outer function’s variables.

Therefore, in this example, since ``x`` is not defined in the inner function, the scope of the outer function is searched for a defined variable ``x``, which is found to have a value of ``1``.

#
### 22. What will the following code output to the console and why:

```
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
```

### What is the issue with this code and how can it be fixed?

#### Answer

The code will output:
```
undefined
John Doe
```

The first ``console.log`` prints ``undefined`` because we are extracting the method from the ``hero`` object, so ``stoleSecretIdentity()`` is being invoked in the global context (i.e., the window object) where the ``_name`` property does not exist.

One way to fix the ``stoleSecretIdentity()`` function is as follows:

``var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);``
#
### 23. Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

### The arguments to the function should be:

- a DOM element
- a callback function (that takes a DOM element as its argument)


#### Answer
Here’s an example solution:

```
function Traverse(p_element,p_callback) {
   p_callback(p_element);
   var list = p_element.children;
   for (var i = 0; i < list.length; i++) {
       Traverse(list[i],p_callback);  // recursive call
   }
}
```
**Function Overview**:

- **Name**: ``Traverse``
- **Purpose**: Performs a depth-first traversal of a tree-like structure, visiting each node and executing a specified callback function on it.

**Parameters**:

- ``p_element``: The starting node (element) of the traversal.
- ``p_callback``: A function that will be called on each visited node during the traversal.

**Function Logic**:

1. **Call the Callback Function on the Current Node**:

- ``p_callback(p_element);``
- Executes the callback function immediately on the current node, allowing for actions to be performed before exploring its children.

2. **Process Children Recursively**:

- ``var list = p_element.children;``
  - Retrieves a list of child nodes associated with the current node.
- ``for (var i = 0; i < list.length; i++) { ... }``
  - Iterates through each child node in the list:
    - ``Traverse(list[i], p_callback);``
      - Recursively calls the ``Traverse`` function on the child node, effectively visiting its children before continuing with other siblings.


**Key Points**:

- **Depth-First Traversal**: The function explores a node's children fully before moving on to its siblings, ensuring a deep exploration of each branch before backtracking.
- **Callback Function**: The p_callback function provides flexibility in terms of the actions performed on each node, enabling various operations during traversal.
- **Recursive Approach**: The function calls itself on child nodes, creating a recursive structure that systematically visits all nodes in the tree.

**Common Use Cases**:

- Tree traversal for tasks like searching, printing, or modifying nodes.
- Processing hierarchical data structures (e.g., file systems, HTML DOM trees).
- Implementing algorithms that rely on tree exploration (e.g., graph algorithms).

#
### 24. Testing your this knowledge in JavaScript: What is the output of the following code?
```
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
```
#### Answer
```
10
2
```

Why isn’t it ``10`` and ``5``?


In the first place, as ``fn`` is passed as a parameter to the function ``method``, the scope (``this``) of the function ``fn`` is window. 

``var length = 10;`` is declared at the window level. It also can be accessed as ``window.length`` or ``length`` or ``this.length`` (when ``this === window``.)


``method`` is bound to ``Object obj``, and ``obj.method`` is called with parameters ``fn`` and ``1``. Though ``method`` is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

When ``fn()`` is called inside ``method``, which was passed the function as a parameter at the global level, ``this.length`` will have access to ``var length = 10`` (declared globally) not ``length = 5 as`` defined in ``Object obj``.

Now, we know that we can access any number of arguments in a JavaScript function using the    ``arguments[]`` array.

Hence ``arguments[0]()`` is nothing but calling ``fn()``. Inside ``fn`` now, the scope of this function becomes the ``arguments`` array, and logging the length of ``arguments[]`` will return ``2``.

#
### 25. Consider the following code. What will the output be, and why?
```
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
```

#### Answer



# ----------------- 

### Old stuff

// #1. 99 Bottles of beer on the wall

// # SOLUTION 1

const BeerSong = () => {

    for (let i = 99; i >= 0; i--) {

        if(i == 1){
            console.log(i +  " bottle of bear on the wall " +  i + " bottle of bear!");
            console.log("Take one down and pass it around!");
        } else if (i == 0) {
            console.log("No more bottles of beers on the wall!");
            console.log("Go and buy some more beers for the wall!");
        } else {
            console.log(i +  " bottles of bear on the wall " +  i + " bottles of bear!");
            console.log("Take one down and pass it around!");
        }
       
    }

    return;
};
BeerSong();

// # SOLUTION 2

function beerSong() {  
    var bottles;
    var bottlesLeft;

    for (i = 99; i >= 1; i--) {
      if (i == 1) {
        bottles = "bottle";
        bottlesLeft = "No bottles of beer on the wall!";
      } else {
        bottles = "bottles";
        bottlesLeft = i - 1 + " bottles of beer on the wall!";
      } 
      
      console.log(i+ " " + bottles + " of beer on the wall,");
      console.log(i+ " " + bottles + " of beer,");
      console.log("Take one down, pass it around,");
      console.log(bottlesLeft);
      } 
      
  }
  console.log(beerSong());


// #2. FizzBuzz in Javascript

for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i)
}


// #3. Print numbers from 1 to 10 in a console

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// #4. Print the odd numbers less than 100 is a console

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}


// #4. Print the even numbers less than 100 is a console

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

// #3. Print the multiplication table with 7

for (let i = 1; i <= 10; i++) {
    console.log("7 * " + i + " = " + 7 * i);
}


// #4. Print all the multiplication tables with numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log("Table for number " + i);
    printTable(i);
}

function printTable(n) {

    for (let j = 1; j <= 10; j++) {
        let row = n + " * " + j + " = " + n * j;
        console.log(row);
    }
}

// #5. Calculate the sum of numbers from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);


// #6. Calculate product of 10

let prod = 1;

for (let i = 1; i <= 10; i++) {
    prod *= i;
}

console.log(prod);


// #7. Calculate the sum of odd numbers greater than 10 and less than 30

let sum = 0;

for (let i = 11; i <= 30; i += 2) {

    sum += i;
}

console.log(sum);

// #8. Create a function that will convert from Celsius to Fahrenheit

function celsiusToFahrenheit(n) {
    return n * 1.8 + 32;
}

let r = celsiusToFahrenheit(20);
console.log(r);


// #9. Create a function that will convert from Fahrenheit to Celsius

function fahrenheitToCelsius(n) {
    return (n - 32) /1.8;
}

let r = fahrenheitToCelsius(68);
console.log(r);


// #10. Calculate the sum of numbers in an array of numbers

SOLUTION 1:

const array1 = [1, 2, 3, 4];
const sumArray = (ar) => {
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return sum;
}

let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumArray(ar);
console.log(sum);



// #11. Double the value of each array element using Reduce Method

let arr = [1,2,3,4,5];
console.log("This is your array " + arr);

let arrTimesTwo = arr.reduce((item, val) => {
    item.push(val * 2);
    return item;
}, []);

console.log("This is your Arry items times two " + arrTimesTwo);


// #12.  Sum of all the elements in an array:

const arr = [1,2,3,4,5];
const arrSum = arr.reduce(
  (item, val) => item + val, 0);

console.log(arrSum);

// #13. How would you destructure array elements in JavaScript?

let a, b, rest;
[a, b] = [10, 20];
console.log(a + b); // 30
[a, b, ...rest] = [10, 20, 30, 40, 50, 60];

console.log(rest); // [30, 40, 50, 60]

document.getElementById("tag").innerHTML = rest;

// #14. How would you remove and return the last element from an array in JavaScript?

const arr = [1,2,3,4,5];
const last = arr.pop();

console.log(last); // 5
console.log(arr); // [1,2,3,4]


// #15. How would you empty an array in JavaScript?
// SOLUTION 1
const arr = [1,2,3,4,5];
arr.length = 0;
console.log(arr);

//SOLUTION 2

const arr = [1,2,3,4,5];
arr.splice(0, arr.length);
console.log(arr);

//SOLUTION 3

const arr = [1,2,3,4,5];

const clearArry = (arr) => {
  while(arr.length > 0){
    arr.pop();
  }
  return arr;
};

console.log(clearArry(arr));

// #16. What do you understand by the JavaScript Map Array function?
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const arr = [1,2,3,4,5];
const map1 = arr.map( i => i * 2);
console.log(map1);

// #17. How would you use arrays to swap variables in JS?
// SOLUTION 1

const arr = [1,2,3,4,5];

temp = arr[1];
arr[1] = arr[0];
arr[0] = temp;

console.log("Arr after swapping " + arr);

// SOLUTION 2
const arr = [1,2,3,4,5];

[arr[0], arr[1]] = [arr[1], arr[0]];

console.log("Arr after swapping: " + arr);

// SOLUTION 3

let a = 3;
let b = 5;

//Code to swap "a" and "b"
// a value change to 8
a += b;

// b value changes to 3
b = a - b;

// a value changes to 5
a -= b;


console.log(
  "After Swapping: a value is : "
   + a + " and b value is :" + b
);

// #18. How would you fill static values in a given array in JS?
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). 
//It returns the modified array.

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: Array [6, 6, 6, 6]


//#19.
class ReservationSystem {
    constructor() {
      this.reservations = [];
    }
  
    // Method to reserve a spot
    Reserve() {
      if (this.reservations.length === 0) {
        // If no reservations, assign reservation number 1
        this.reservations.push(1);
      } else {
        // Find the lowest available reservation number
        let nextReservationNumber = 1;
        while (this.reservations.includes(nextReservationNumber)) {
          nextReservationNumber++;
        }
        this.reservations.push(nextReservationNumber);
      }
  
      // Return the reservation number
      return this.reservations[this.reservations.length - 1];
    }
  
    // Method to cancel a reservation
    Cancel(reservationNumber) {
      const index = this.reservations.indexOf(reservationNumber);
      if (index !== -1) {
        // Remove the reservation if found
        this.reservations.splice(index, 1);
        return true; // Cancellation successful
      } else {
        return false; // Reservation not found
      }
    }
  }
  
  // Example Usage:
  const reservationSystem = new ReservationSystem();
  
  const reservation1 = reservationSystem.Reserve();
  console.log(`Reservation 1: ${reservation1}`);
  
  const reservation2 = reservationSystem.Reserve();
  console.log(`Reservation 2: ${reservation2}`);
  
  const cancellationResult = reservationSystem.Cancel(reservation1);
  console.log(`Cancellation of Reservation 1: ${cancellationResult}`);
  
  const reservation3 = reservationSystem.Reserve();
  console.log(`Reservation 3: ${reservation3}`);