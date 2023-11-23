<h1 align="center">JavaScript ECMAScript 6</h1>


### Overview of the Section
* **[What is ES6?](#What-is-ES6?)**


#
### What is ES6?
ES6 or ECMAScript 2015 is the sixth major release of the ECMAScript language.<bt/>
To write web apps in ES6 that will support all Browsers us tools like Babel or Webpac.

**[Back To The Top](#Overview-of-the-Section)**
#
#### Webpack 
Is a tool that brings together many loaders and plugins to create a single bundle code file.<br/>
Allows you to run an environment that hosts _babel_.<br/>
Is an open-source JS module bundler that takes modules with dependencies and generates static assets representing those modules.<br/>
It bundles multiple modules and packs them into a _single.js_ file.<br/>
It comes with an integrated dev server.<br/>
Server example - ```localhost:8080/assets/bundle.js``` <br/>
```npm install Webpack --save-dev``` - for development only

Define script in _"package.json"_ file - define the starting point and end point<br/>
Run - ``` npm run build``` - command for runing the script<br/>
Script "-p" - for minified code


#### Bable 
Is a library that does a single job  - it compiles JavaScript.<br/>
Allows to write ES6 code and convert it back into pre-ES6 JS that the browser supports.

### Steps to install babel?
```
node -v 
npm -v
npm install --save-dev babel-cli
```

### Why is JavaScript a dynamic language?
Data types of the variable can change during the runtime and JavaScript will not complain about it.

### How does JavaScript determine data types?
By looking at the values during the runtime.

### Use of ```let``` and ```const``` in JavaScript?
Different ways of creating variables. <br/>
Keywords```let``` and ```const```  introduced in ES6.<br/>
```const``` - immutable variables <br/>
```let``` - used to create mutable variables.

### Explain constants in ES6?
Also are known as immutable variables  - ```const strLength =  10;```<br/>
Enable protection to overwrite a variable value.

### Template literals in ES6?
Strings with embedded code and variables inside.<br/>
Done by using backtick
```
let a = "Hello";
let b = "John";
let c = `${a} ${b}`
console.log(c); // Hello John;
```

Template literals:
```
const a = 5;
const b = 10;

console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

// "Fifteen is 15 and
// not 20."
```

### Spread operator in ES6?
A new way to manipulate an array and object in ES6.

```
let a = [7,8,9];
let b = [1,2,3, ...a, 10];
console.log(b); // [1,2,3,7,8,9,10]

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

```

### What is set in ES6?
The ```Set``` object lets you store unique values of any type, whether primitive values or object references.
Sets are the collections that deal with single objects or single values. <br/>
Set is the collection of values similar to arrays, but it does not contain any duplicates.

```Set``` objects are collections of values.<br/>
A value in the ```Set``` may only occur once; it is unique in the ```Set```'s collection.<br/>
You can iterate through the elements of a set in insertion order.

**Performance** <br/>
The Set has method checks if a 