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