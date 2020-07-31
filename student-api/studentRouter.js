const router = require("express").Router();
const {allStudents, createStudent,getStudent,updateContact,deleteContact} = require("./studentController");

router.get("/",allStudents);
router.get("/:id",getStudent);
router.post("/",createStudent);
router.put("/:id",updateContact);
router.delete("/:id",deleteContact);

module.exports = router;