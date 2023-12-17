<h1 align="center">JavaScript array methods' </h1>

### Overview of the Section
* **[Filter](#filter)**
* **[Map](#map)**
* **[Find](#find)**
* **[forEach](#forEach)**
* **[forEach vs map](#foreach-vs-map)**
* **[some](#some)**
* **[every](#every)**
* **[reduce](#reduce)**

#
### Filter

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

### Map

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
### Find

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


**[Back To The Top](#Overview-of-the-Section)**
#

// # INCLUDES
const arrIncludes = [1,2,3,4,5];
arr.includes(3);
// returns true
arr.includes(7);
// returns false - arrIncludes is not including number 7 as an item

// # SORT
arr.sort();

// Sort in descending
arr.sort((a,b) => a > b ? -1:1);

// Sort in ascending
arr.sort((a,b) => a > b ? 1: -1);

// # FROM 
arr.from(string) // turning a string into an array
arr.from("Tom"); // ["T", "o", "m"];

// # OF
arr.forEach(1,2,3,4,5);
// [1,2,3,4,5]
// turning numbers into array

// # JOIN
const numArr = ["sa", "lo", "n", "i"];
console.log(numArr.join(","));
// returns - sa,lo,n,i - converts arry into string

// TO STRING
const fruits = ["banana", "orange", "apple", "mango"];
console.log(fruits.toString());
// returns - banana, orange, apple, mango - turning array into string


