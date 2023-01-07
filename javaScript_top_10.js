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


