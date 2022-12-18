<h1 align="center">JavaScript - ES6</h1>

### What is ES6?
ES6 or ECMAScript 2015 is the sixth major release of the ECMAScript language.<bt/>
To write web apps in ES6 that will support all Browsers us tools like Babel or Webpac.

### What are Babel and Webpack?
Are tolls for developers to optimize JS apps.

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
