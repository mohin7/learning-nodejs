const express = require('express');
const userRoute = require('./userRoute');
const app =  express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/users',userRoute);

app.get("*",(req,res)=>{
  res.send("<h1>Request not found 404</h1>")
})
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`The app is running on ${PORT}`);
})