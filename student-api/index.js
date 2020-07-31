const express = require("express");
const studentsRouter = require('./studentRouter')
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/student", studentsRouter)
app.get("*", (req,res)=>{
  res.send("<h3>Please enter your current path 404</h3>")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`I'm running on PORT ${PORT}`);
})
