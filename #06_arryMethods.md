<h1 align="center">JavaScript array methods' </h1>

### Overview of the Section
* **[Filter](#filter)**

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

```
[1, 3, 5, 7, 9]
```

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


// # FIND
arr.find((item) => {
    return item.name === "Book";
});
// item with the name: "Book" from the array of objects

// # FOR-EACH
arr.forEach((item) => {
    console.log(item.price);
});
// all prices from the array of objects

// # SOME:
arr.some((item) => {
    return item.price <= 100;
});
// returns "true" or "false" if any/some items price is less then 100

// # EVERY:
arr.every((item) => {
    return item.price <= 100l
});
// returns if every items price is less then 100 return "true" or "false"

// # REDUCE:
arr.reduce((curentTotal, item) => {
    return item.price + curentTotal;
}, 0);
// starts at 0 + price.item =[0] price.item
// returns a sum of all price.items

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


