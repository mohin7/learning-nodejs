const express = require("express");
const morgan = require("morgan");

const contactRoutes = require("./contactRoutes");

const app = express();

// set view template engine 
app.set("view engine", "ejs");

// accept form data 
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(morgan('dev'));
app.use("/contact", contactRoutes);

app.get("/", (req,res)=>{
  let post = {
    title: "This is post title",
    body: "Body content here",
    published: true
  }
  res.render("pages/index",{title: 'Ejs Dynamic title', post})
})
app.get("/about", (req,res)=>{
  let posts= [
    {title: 'post one', author: "Mohin", published: true},
    {title: 'post two', author: "Tuhun", published: false},
    {title: 'post three', author: "Habib", published: true},
  ]
  res.render("pages/about", {posts})
})

app.get("/help", (req,res)=>{
  res.render("pages/help")
})

app.get("*", (req,res)=>{
  res.send("<h1>Page not found 404 !</h1>")
})



const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`App is running PORT is ${PORT}`);
})