 // #1. 99 Bottles of beer on the wall

let bottles;

for (counter = 99; counter >= 1; counter = counter - 1) {

    if (counter == 1) {
        bottles = "botlee";

    } else {
        bottles = "botles";
    }

    console.log(counter + " " + " bottles " + "of beer on the wall.");

    if (counter < 99) {
        console.log("");
        console.log(counter + " " + bottles + " of beer on the wall.");
    }

    console.log(counter + " " + bottles + " of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");

    if (counter == 1) {
        console.log("No more bottles of beer on the wall.");
    }
}


// #2. FizzBuzz in Javascript

for (let i = 1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i)
}






// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


let i;

for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}


/*

It happens because of the async nature of setTimeout().
There is a queue for such tasks as setTimeout().

Before execution, the tasks queue is an empty array.
const queue = [];

Loop executes first and adds to queue tasks.

i = 0
queue = [log()]
i = 1
queue = [log(), log()]
i = 2
queue = [log(), log(),log()]
i = 3
for loop stopped because i became 3 and it doesn't satisfy statement i < 3. In the end the tasks queue = [log(), log(),log()]

All code executed, time to do tasks. The engine takes functions from the queue one by one in FIFO (first in first out) order and executes them.

What is inside the log() function? console.log(i). what is i value? Because it was declared outside of for loop it's in the global scope and its value is 3. So every function prints 3.

If it would declare inside the loop like this: for(let i = 0; i < 3; i++) functions would print 0, 1, 2. It's because of each i would become a separate variable (closure) inside every function.

You can read more about this here:
closures: https://javascript.info/closure
event loop (execution order): https://javascript.info/event-loop

*/