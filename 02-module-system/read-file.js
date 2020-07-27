const fs = require("fs"); // "fs" is the nodejs module

// write and create a file
fs.readFile("makefile.json", function (err, res) {
  if (err) {
    console.log(err);
  }
  const data = JSON.parse(res);
  console.log(data);
});
