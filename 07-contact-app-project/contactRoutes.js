const router = require("express").Router();
const {getAllContact,createContact} = require("./contactController");

router.get("/",getAllContact)
router.post("/",createContact)
// router.get("/:id")
// router.put("/:id")
// router.delete("/:id")


module.exports = router