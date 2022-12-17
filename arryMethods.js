// # FILTER
const arr = [1,2,3,4];
arr.filter((item) => item.price <= 100);
// returns all items less than 100

// # MAP - creates anew array - apply some
arr.map((item) => item.name);
// all items with the name atribute from the array of objects

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


