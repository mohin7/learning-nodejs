const users = require("./Users");

exports.getAllUser = (req,res) => {
  res.json(users.getAllUser())
}
exports.getSingleUser = (req,res) => {
  let {id} = req.params;
  id = parseInt(id);
  res.json(users.getSingleUser(id))
}


exports.createUser = (req,res) => {
 let {name, email, phone } = req.body;
 let user = users.createUser({
   name,
   email,
   phone
  });
 res.json(user)
}

// update user 
exports.updateUser = (req,res)=>{
  let {id} = req.params;
  id = parseInt(id);
  let {name, email, phone} = req.body;
  let user = users.updateUser(id, {
    name,
    email,
    phone
  })
  res.json(user)
}

// delete user 
exports.deleteUser = (req,res)=>{
  let {id} = req.params;
  id = parseInt(id);
  let user = users.deleteUser(id)
  res.json(user)
}
