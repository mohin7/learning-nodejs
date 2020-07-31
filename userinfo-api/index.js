const express = require('express');
const usersRoute = require('./UsersRoute');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/users", usersRoute)

app.get("*", (req,res)=> {
  res.send("<h1>Please Enter a valid address 404 not found!</h1>")
})

const PORT  = process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`App is running PORT ${PORT}`);
})