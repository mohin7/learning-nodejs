const fs = require('fs'); // "fs" is the nodejs module

// create a demo obj 
let info = {
  name: "Mohin Uddin",
  city: "Cumilla",
  vill: "Chandina",
  collage: {
    seu: "Dhaka",
    sch: "Cumilla"
  }
}
// convert into JSON 
const data = JSON.stringify(info);

// write and create a file 
fs.writeFile('makefile.json',data, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully Write!");
  }
})