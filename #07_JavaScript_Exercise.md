

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