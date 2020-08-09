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

exports.getSingleContact = (req,res)=>{
  let {id} = req.params;
  id = parseInt(id);
  let contact = contacts.getContactById(id)
  res.json(contact)
}

exports.updatedContact = (req,res)=>{
  let {id}  = req.params;
  id  = parseInt(id);

  let {name, phone, email} = req.body;
  let contact = contacts.updatedContactById(id, {
    name,
    phone,
    email
  })
  res.json(contact)
}

exports.deletedContact = (req,res)=>{
  let {id} = req.params;
  id = parseInt(id);
  let contact = contacts.deletedContactById(id)
  res.json(contact)
}