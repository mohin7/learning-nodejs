const express = require("express");
const app = express();
const morgan = require("morgan");

// custom middleware 
function customMiddleware(req,res,next){
  if(req.url === "/service"){
    res.send("<h3>You are block in this page!</h3>");
  }
  next()
}



// app.use(morgan("dev"));

// call custom middleware 
app.use(customMiddleware);

app.get("/", function(req,res){
  res.send("<h2>Hello world</h2>")
})
app.get("/about",morgan("dev"), function(req,res){
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