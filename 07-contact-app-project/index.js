const express = require("express");
const morgan = require("morgan");
const contactRoutes = require("./contactRoutes");

const app = express();

// accept form data 
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(morgan('dev'));
app.use("/contact", contactRoutes);

app.get("*", (req,res)=>{
  res.send("<h1>Page not found 404 !</h1>")
})



const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`App is running PORT is ${PORT}`);
})