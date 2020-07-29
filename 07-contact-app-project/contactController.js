const contacts = require("./Contacts")

exports.getAllContact = (req,res) =>{
  res.json(contacts.getAllContact())
}

exports.createContact = (req,res)=>{
  let {name,email, phone} = req.body;
  let contact = contacts.createContact({
    name,
    email,
    phone
  })

  res.json(contact)
}