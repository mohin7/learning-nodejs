const express = require("express");

const app = express();

app.get("/", function(req,res){
  res.send("<h2>Hello world</h2>")
})
app.get("/about", function(req,res){
  res.send("<h2>Hello about</h2>")
})
app.get("/service", function(req,res){
  res.send("<h2>Hello service</h2>")
})

app.get("*", function(req,res){
  res.send("<h1>Page not Found 404</h1>")
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
  console.log(`Server on running on ${PORT}`);
  console.log("Hi nodemone");
})