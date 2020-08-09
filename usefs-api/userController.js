const users = require('./Users');
const fs = require('fs');

exports.getAllUsers = (req,res)=>{
  let data = JSON.stringify(users.getAllUsers())
  fs.writeFile('user.json',data, (err)=>{
    if(err){
      console.log(err);
    }
  })
  return res.json(users.getAllUsers())
}

exports.createUser = (req, res)=>{
  let {name, email, phone} = req.body;
  let user = users.createUser({
    name,
    email,
    phone
  })
  res.json(user)
}
