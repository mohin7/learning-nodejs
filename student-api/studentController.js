const students = require("./Students");

// get students 
exports.allStudents = (req,res)=>{
  return res.json(students.getAllStudent())
}

// get student by ID
exports.getStudent = (req,res)=>{
  let {id} = req.params;
  id = parseInt(id);
  let student = students.getStudentById(id)
  res.json(student)
}

// create student 
exports.createStudent = (req,res)=>{
  let {name,phone,email} = req.body
  let student = students.createStudent({
    name,
    phone,
    email
  });
  res.json(student)
}

// update contact 
exports.updateContact = (req,res)=>{
  let {id}  = req.params;
  id  = parseInt(id);

  let {name, phone, email} = req.body;
  let student = students.updatedStudentById(id, {
    name,
    phone,
    email
  })
  res.json(student)
}

// delete contact 
exports.deleteContact = (req,res)=>{
  let {id}  = req.params;
  id  = parseInt(id);
  let student = students.deleteStudentById(id);
  res.json(student)
}