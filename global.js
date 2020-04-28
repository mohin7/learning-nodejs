// console.log(module);

// import local file
const moduleFile = require("./module");

// output add function
console.log(moduleFile.add(1, 3));

// di-structure system output
const { sub } = require("./module");
console.log(sub(5, 3));
