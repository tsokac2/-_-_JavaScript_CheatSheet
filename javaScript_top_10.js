let i;

for( i=0; i<3; i++) {
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