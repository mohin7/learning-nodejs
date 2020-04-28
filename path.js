const path = require("path"); // "path" is the nodejs module

// console.log(__dirname); //that will show file directory

// console.log(__filename); // file name with directory will be show

const myCurrentPath = __filename;
const myCurrentDirectory = __dirname;

console.log(path.basename(myCurrentDirectory)); //out will be show nodejs
console.log(path.basename(myCurrentPath)); //out will be show path.js
console.log(path.extname(myCurrentPath)); //out will be show .js

console.log(path.isAbsolute(myCurrentPath)); // return true
console.log(path.isAbsolute('./math.js')); // return false


//we create a path object
const pathObj = {
  dir: "user/nodejs/module",
  name: "app",
  ext: ".js",
};
// console.log(path.format(pathObj)); //expected output 'user/nodejs/module/app.js'
