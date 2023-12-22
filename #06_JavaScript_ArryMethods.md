<h1 align="center">JavaScript Array methods' </h1>

### Overview of the Section
* **[push](#push)**
* **[pop](#pop)**
* **[unshift](#unshift)**
* **[shift](#shift)**
* **[filter](#filter)**
* **[map](#map)**
* **[find](#find)**
* **[forEach](#forEach)**
* **[forEach vs map](#foreach-vs-map)**
* **[some](#some)**
* **[every](#every)**
* **[reduce](#reduce)**
* **[includes](#includes)**
* **[filter vs includes](#filter-vs-includes)**
* **[sort](#sort)**
* **[of](#of)**
* **[join](#join)**
* **[toString](#toString)**

#

### push

The ``push()`` method adds one or more elements to the end of an array, while the.

#### Example usage:

```
const numbers = [1, 2, 3];
numbers.push(4); // numbers is now [1, 2, 3, 4]
```
#
### pop

``pop()`` method removes the last element from an array.

```
const numbers = [1, 2, 3];
numbers.pop(); // numbers is now [1, 2]
```

**[Back To The Top](#Overview-of-the-Section)**
#

### unshift
Similar to ``push()`` and ``pop()``, but they operate on the beginning of the array. 
The ``unshift()`` method inserts one or more elements to the beginning of an array,

Example usage:

```
const numbers = [1, 2, 3];

numbers.unshift(0); // numbers is now [0, 1, 2, 3]
```


### shift
``shift()`` method removes the first element from an array.

Example usage:

```
const numbers = [1, 2, 3];

numbers.shift(); // numbers is now [2, 3]
```

**[Back To The Top](#Overview-of-the-Section)**
#

### filter

The ``filter`` method in JavaScript is a powerful array method that allows you to create a new array containing elements that pass a certain condition. 
It does not modify the original array but instead returns a new one.

Here's a breakdown of how the filter method works, along with a code example:

``let newArray = array.filter(callback(element[, index, array])[, thisArg]);``

- ``array``: The original array.
- ``callback``: Function is a predicate, to test each element of the array. Return true to keep the element, ``false`` otherwise. It accepts three arguments:
    - ``element``: The current element being processed in the array.
    - ``index (optional)``: The index of the current element being processed in the array.
    - ``array (optional)``: The array filter was called upon.
    - ``thisArg (optional)``: Object to use as this when executing callback.

#### Example:
Let's say you have an array of numbers, and you want to filter out the even ones:

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(function (number) {
  return number % 2 !== 0;
});

console.log(oddNumbers);
```
In this example, the ``filter`` method is used to create a new array ``(oddNumbers)`` that only contains the odd numbers from the original array. The callback function checks whether each number is odd ``(number % 2 !== 0)``, and if it is, the number is included in the new array.

The result will be:

``[1, 3, 5, 7, 9]``

**[Back To The Top](#Overview-of-the-Section)**
#

### map

The ``map`` method is a fundamental function in JavaScript that is used to transform elements of an array. It applies a provided function to each element of the array and returns a new array containing the results. 
 
This is useful when you want to create a modified version of an existing array without modifying the original one.

Here's a simple explanation along with a code example:

```
// Original array
const numbers = [1, 2, 3, 4, 5];

// Using the map method to square each number
const squaredNumbers = numbers.map(function (num) {
  return num * num;
});

// Output
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

In this example, the ``map`` method is applied to the ``numbers`` array. The provided function takes each element ``(num)`` and returns its square. The result is a new array ``(squaredNumbers)`` containing the squared values.

You can also use arrow functions for conciseness:

```
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

**[Back To The Top](#Overview-of-the-Section)**
#
### find

The ``find`` method in JavaScript is used to search for an element in an array that satisfies a provided testing function. Once the element is found, it returns the first matching element, otherwise, it returns ``undefined``. 

Here's a breakdown of how it works:
```
// Example array
const numbers = [1, 2, 3, 4, 5];

// Function to test if an element is even
const isEven = (number) => number % 2 === 0;

// Using find to get the first even number
const firstEven = numbers.find(isEven);

console.log(firstEven); // Output: 2
```

In this example, the ``isEven`` function tests if a number is even. The ``find`` method then iterates through the ``numbers`` array and returns the first element that satisfies the condition, which is ``2`` in this case.

It's important to note that if no element satisfies the condition, the ``find`` method returns ``undefined``. Additionally, the ``find`` method does not modify the original array.

#### Example:
```
const fruits = ["apple", "banana", "orange", "grape", "melon"];

const firstRedFruit = fruits.find(function(fruit) {
  return fruit.startsWith('o');
});

console.log(firstRedFruit); // Output: apple
```
In this example, the callback function is checking if the current element starts with the letter ``"o"``. Since the first element, ``"orange"``, starts with ``"o"``, the ``find()`` method returns ``"orange"`` immediately without iterating through the rest of the array.

**[Back To The Top](#Overview-of-the-Section)**
#
### forEach

The ``forEach`` method is a built-in function in JavaScript that allows you to iterate over elements of an array. It is particularly useful for executing a provided function once for each element in the array, in order. The primary advantage of using ``forEach`` is its simplicity and readability.

Here's a basic example of how forEach works:

```
// Sample array
let numbers = [1, 2, 3, 4, 5];

// Using forEach to iterate over each element
numbers.forEach(function (element) {
  console.log(element);
});
```

In this example, the ``forEach`` method is called on the ``numbers`` array. It takes a callback function as its argument, and this function is executed for each element in the array. The ``element`` parameter represents the current element being processed.

The output of the above code will be:
```
1
2
3
4
5
```
You can also use an arrow function for conciseness:
``numbers.forEach(element => console.log(element));``

The ``forEach`` method is beneficial when you want to perform an action on each element of an array without the need for an explicit loop. It simplifies the code and makes it more expressive.

**[Back To The Top](#Overview-of-the-Section)**
#
### forEach vs map

#### ``forEach()`` Method:

The ``forEach()`` method is used to iterate over elements in an array. It executes a provided function once for each array element and does not create a new array. 

It is mainly used when you want to perform an operation on each element of the array without changing the array itself.

Here's an example of using ``forEach()``:

```
const originalArray = [1, 2, 3, 4];
const modifiedArray = [];

originalArray.forEach((element) => {
  // Perform some operation on each element
  modifiedArray.push(element * 2);
});

console.log("Original Array:", originalArray);
console.log("Modified Array:", modifiedArray);
```
In this example, ``originalArray`` remains unchanged, and the ``modifiedArray`` is created separately to store the modified values.

#### ``map()`` Method:

The ``map()`` method, on the other hand, is used to create a new array with the results of calling a provided function on every element in the array. It is specifically designed for transforming each element of the array and returning a new array based on those transformations.

Here's an example of using ``map()``:

```
const originalArray = [1, 2, 3, 4];

const modifiedArray = originalArray.map((element) => {
  // Perform some operation on each element
  return element * 2;
});

console.log("Original Array:", originalArray);
console.log("Modified Array:", modifiedArray);
```
In this example, ``originalArray`` remains unchanged, and ``map()`` creates a new array ``(modifiedArray)`` with the doubled values of each element in ``originalArray``.

#### Summary:
- ``forEach()`` is used for iterating over elements and performing an operation without creating a new array.
- ``map()`` is used for transforming each element and creating a new array with the results of those transformations.

**[Back To The Top](#Overview-of-the-Section)**
#

### some
The ``some()`` method is a built-in function in JavaScript that is used to test whether at least one element in an array passes a provided function's test. 

It returns a **Boolean** value, true if any element satisfies the condition, and false otherwise.

Here's a breakdown of how the ``some()`` method works:

``array.some(callback(element, index, array), thisArg);``

- ``callback``: The function to test for each element.
- ``element``: The current element being processed in the array.
- ``index``: The index of the current element.
- ``array``: The array that some() is being applied to.
- ``thisArg (optional)``: Object to use as this when executing the callback function.

Example:

```
// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Check if at least one element is greater than 3
const isGreaterThanThree = numbers.some(function(element) {
  return element > 3;
});

console.log(isGreaterThanThree); // Output: true
```

In this example, the ``some()`` method iterates over each element in the numbers array. The provided callback function checks if the current element is greater than 3. Since there is at least one element (4 and 5) that satisfies this condition, the ``some()`` method returns true.

**[Back To The Top](#Overview-of-the-Section)**
#

### every

The ``every()`` method is a built-in function in JavaScript that tests whether all elements in an array pass a provided function. 

It returns a **Boolean** value, indicating whether all elements meet the specified condition.

The ``every()`` method iterates through each element in the array. If the provided callback function returns true for every element, ``every()`` returns true; otherwise, it returns false.

Here's an example to illustrate:

```
// Function to check if all elements are greater than 10
function isGreaterThan10(element) {
  return element > 10;
}

// Array to test
const numbers = [15, 20, 25, 30];

// Using every() to check if all numbers are greater than 10
const allGreaterThan10 = numbers.every(isGreaterThan10);

console.log(allGreaterThan10); // Output: true
```
In this example, the ``isGreaterThan10`` function checks if each element in the ``numbers`` array is greater than 10. Since all elements meet this condition, the ``every()`` method returns true.

The ``every()`` method is commonly used to validate input data, check for specific properties or values within an array, or perform actions based on whether a condition applies to all elements.

```
const numbers = [1, 2, 3, 4];

// Check if all elements are positive
const areAllPositive = numbers.every(number => number > 0);
console.log(areAllPositive); // Output: true

// Check if any element is odd
const hasAnyOddNumber = numbers.every(number => number % 2 === 0);
console.log(hasAnyOddNumber); // Output: false
```

#### Common Use Cases:

- **Validating input data**: Check if all values in an array of user inputs meet specific criteria.

- **Filtering arrays**: Iterate over an array and remove elements that don't meet a specified condition.

- **Performing actions based on conditions**: Execute specific actions if all or none of the array elements satisfy a condition.

**[Back To The Top](#Overview-of-the-Section)**
#

#### reduce

The ``reduce()`` method is a built-in JavaScript method used to apply a reducer function to each element of an array, accumulating the results and returning a single value. It iteratively combines the current accumulator value with the current element of the array, updating the accumulator as it moves through the array.

The ``reduce()`` method is often used to perform cumulative operations on arrays, such as calculating the ``sum``, ``product``, or ``average`` of the elements. It's also useful for transforming arrays into a single value, such as creating a string representation of the elements or converting an array of objects to an array of their properties.

#### Syntax:

``array.reduce(callbackFunction [, initialValue]);``

#### Parameters:

- callbackFunction: A callback function that takes two arguments: the current accumulator value and the current element of the array. It should return the updated accumulator value.

- initialValue: (Optional) An initial value to be used as the starting point for the accumulator. If not provided, the first element of the array will be used as the initial value.

#### Example:
```
const numbers = [1, 2, 3, 4];

// Calculate the sum of the numbers
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // Output: 10

// Convert an array of objects to an array of names
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'orange', color: 'orange' },
    { name: 'banana', color: 'yellow' },
];
const fruitNames = fruits.reduce((names, fruit) => names.concat(fruit.name), []);
console.log(fruitNames); // Output: ["apple", "orange", "banana"]
```

#### Common Use Cases:

- **Calculating cumulative values**: Sum, product, average, minimum, maximum.

- **Transforming arrays to a single value**: String concatenation, property extraction, object creation.

- **Filtering or modifying elements based on a condition**: Keep only elements that satisfy a condition, apply a transformation to each element.

**[Back To The Top](#Overview-of-the-Section)**
#

### includes

The ``includes()`` method is a built-in JavaScript method used to determine whether a specific value exists within an array. It iterates through the array elements and checks if the specified value is present. The method returns ``true`` if the value is found, and ``false`` if it is not found.

The ``includes()`` method is commonly used to check for the existence of specific values within an array, validate user inputs, or perform actions based on the presence or absence of certain elements.

#### Syntax:
``array.includes(value);``

#### Parameters:
- ``value``: The value to be searched for within the array.

#### Example:
```
const numbers = [1, 2, 3, 4];

// Check if the array includes the value 3
const isThreePresent = numbers.includes(3);
console.log(isThreePresent); // Output: true

// Check if the array includes the value 5
const isFivePresent = numbers.includes(5);
console.log(isFivePresent); // Output: false
```
#### Common Use Cases:

- **Validating user inputs**: Check if user input matches a required value or pattern.

- **Searching for specific elements**: Find and retrieve elements based on their values.

- **Filtering based on presence/absence**: Filter arrays to include or exclude elements based on their existence.

**[Back To The Top](#Overview-of-the-Section)**
#

### filter vs includes

**Example 1**: Using ``filter()`` to extract even numbers from an array:
```
const numbers = [1, 2, 3, 4, 5];

// Filter the array to include only even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

**Example 2**: Using ``includes()`` to check for the presence of a specific value:
```
const fruits = ['apple', 'orange', 'banana'];

// Check if the array includes the value 'banana'
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true

// Check if the array includes the value 'grape'
const hasGrape = fruits.includes('grape');
console.log(hasGrape); // Output: false
```

#### Key Differences:

- **Purpose**: ``filter()`` extracts elements based on criteria, while ``includes()`` checks for the presence of a specific value.

- **Result**: ``filter()`` returns a new array containing the filtered elements, while ``includes()`` returns a boolean value (true or false).

- **Operation**: ``filter()`` iterates through the array and creates a new array, while ``includes()`` iterates through the array and checks for the presence of a specific value.

#### Use Cases:

- **filter()**: Extracting specific elements, creating filtered subsets, modifying arrays based on criteria.

- **includes()**: Checking for the existence of values, validating user inputs, making decisions based on element presence.

**[Back To The Top](#Overview-of-the-Section)**
#

### sort

The ``sort()`` method in JavaScript is used to arrange the elements of an array in ascending or descending order based on their Unicode values. 

The default sorting order is lexicographic (dictionary) for strings and ascending numerical for numbers. It's an in-place method, meaning it modifies the original array.

Here's a simple example of how the ``sort()`` method works:

```
// Example with numbers
let numbers = [4, 2, 8, 1, 6];
numbers.sort();
console.log(numbers); // Output: [1, 2, 4, 6, 8]

// Example with strings
let fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']

// Example with a custom sorting function for numbers in descending order
let customSort = function (a, b) {
  return b - a;
};

numbers.sort(customSort);
console.log(numbers); // Output: [8, 6, 4, 2, 1]
```

In the first example, the default lexicographic sorting is applied to numbers and strings. In the second example, a custom sorting function is used to sort numbers in descending order.

Keep in mind that when sorting numbers, using a custom comparison function is essential to ensure correct results. The function should return a negative value if a should be sorted before b, a positive value if b should be sorted before a, and 0 if they are equal.

#### Sorting in Ascending Order
```
// Example with numbers
let numbersAscending = [4, 2, 8, 1, 6];
numbersAscending.sort();
console.log(numbersAscending); // Output: [1, 2, 4, 6, 8]

// Example with strings
let fruitsAscending = ['banana', 'apple', 'orange', 'grape'];
fruitsAscending.sort();
console.log(fruitsAscending); // Output: ['apple', 'banana', 'grape', 'orange']
```
In these examples, the default behavior of ``sort()`` is applied, resulting in ascending order for both numbers and strings.

#### Sorting in Descending Order:
```
// Example with numbers
let numbersDescending = [4, 2, 8, 1, 6];
numbersDescending.sort(function (a, b) {
  return b - a;
});
console.log(numbersDescending); // Output: [8, 6, 4, 2, 1]

// Example with strings
let fruitsDescending = ['banana', 'apple', 'orange', 'grape'];
fruitsDescending.sort(function (a, b) {
  return b.localeCompare(a);
});
console.log(fruitsDescending); // Output: ['orange', 'grape', 'banana', 'apple']
```
**[Back To The Top](#Overview-of-the-Section)**
#

### from

The ``from()`` method in JavaScript is used to create a new array instance from an iterable object or array-like object. It can be called on various objects such as arrays, strings, or even on the arguments object. The purpose is to convert these iterable objects into a proper array.

Here is a simple code example to illustrate the usage of the ``from()`` method:

```
// Example 1: Converting a string to an array
const str = 'Hello, World!';
const strArray = Array.from(str);
console.log(strArray);
// Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

// Example 2: Using a mapping function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = Array.from(numbers, x => x * x);
console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]

// Example 3: Using on the arguments object
function exampleFunction() {
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}

exampleFunction(1, 'hello', true);
// Output: [1, 'hello', true]
```
In the first example, the ``from()`` method is used to convert each character of the string ``str`` into an element of the ``strArray``. In the second example, a mapping function is provided to square each element of the ``numbers`` array. Lastly, the third example shows the usage of ``from()`` on the ``arguments`` object within a function.

**[Back To The Top](#Overview-of-the-Section)**
#
### of

The ``of()`` method in JavaScript is a static method that is part of the ``Array`` object. It is used to create a new array instance with a variable number of arguments, where each argument becomes an element of the new array. This method was introduced in ``ECMAScript 6 (ES6)``.

Here's an example of how the ``of()`` method works:

```
// Using of() to create an array
const newArray = Array.of(1, 2, 3, "four", 5.5, true);

// Displaying the created array
console.log(newArray);
```

In this example, the ``Array.of()`` method is used to create a new array called ``newArray``. It takes six arguments (numbers, a string, and a boolean), and each argument becomes an element in the array. The resulting array, newArray, looks like this:

``[1, 2, 3, "four", 5.5, true]``

It's worth noting that the ``of()`` method is useful when you want to create an array with a specific set of elements, especially if some of the elements are non-numeric or of different types.

**[Back To The Top](#Overview-of-the-Section)**
#
### join

The ``join()`` method in JavaScript is used to concatenate the elements of an array into a string. It takes an optional parameter, which is the separator, and returns a string that consists of the array elements joined with the specified separator.

Here's an example to illustrate the usage of the ``join()`` method:

```
// Example array
const fruits = ["apple", "banana", "orange", "grape"];

// Using join() without a separator
const joinedWithoutSeparator = fruits.join();
console.log("Joined without separator:", joinedWithoutSeparator);
// Output: Joined without separator: apple,banana,orange,grape

// Using join() with a custom separator "|"
const joinedWithSeparator = fruits.join(" | ");
console.log("Joined with separator:", joinedWithSeparator);
// Output: Joined with separator: apple | banana | orange | grape

// Using join() with a custom separator "-"
const numbers = [1, 2, 3];
const numberString = numbers.join("-");
console.log(numberString); // Output: 1-2-3
```

In the first example, the ``join()`` method is called without a separator, so the default comma is used to concatenate the array elements into a string. In the second example, a custom separator ``(" | ")`` is provided, resulting in a string where array elements are joined by the specified separator.

The ``join()`` method is useful for creating readable and formatted strings from array elements, especially when dealing with data that needs to be presented in a specific way.

**[Back To The Top](#Overview-of-the-Section)**
#

### toString
The ``toString()`` method in JavaScript is a method that is present in the prototype of every object in the language. It is used to convert an object to a string. The ``toString()`` method is automatically called when an object is to be represented as a text value or when an object is referred to in a manner in which a string is expected.

Here is a simple code example to illustrate the ``toString()`` method:

```
// Define a custom object constructor
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Add a toString() method to the prototype of the object
Car.prototype.toString = function() {
    return `${this.year} ${this.brand} ${this.model}`;
};

// Create an instance of the Car object
var myCar = new Car("Toyota", "Camry", 2022);

// Call the toString() method on the object
var carString = myCar.toString();

// Output the result
console.log(carString); // Output: "2022 Toyota Camry"
```

In this example, we have a ``Car`` object with properties for the brand, model, and year. The ``toString()`` method is added to the prototype of the object, and it returns a string representation of the car, including its year, brand, and model. When the ``toString()`` method is called on the myCar instance, it returns the formatted string, which is then logged to the console.

The ``toString()`` method is often used implicitly, such as when an object is concatenated with a string or when it is used in template literals. If a custom ``toString()`` method is not defined for an object, the default implementation provided by ``Object.prototype.toString()`` is used, which returns a string indicating the object's type.

**[Back To The Top](#Overview-of-the-Section)**
#


