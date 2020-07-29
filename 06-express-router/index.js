const express = require("express");
const app = express();
const checkRouter = require("./router");

const PORT = process.env.PORT || 4040
app.use("/check",checkRouter);
app.get("/", (req,res)=>{
  res.send("Homepage");
})

app.listen(PORT, ()=>{
  console.log(`Server is Listing PORT = ${PORT}`);
})