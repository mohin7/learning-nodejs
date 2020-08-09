const router = require("express").Router();
const {getAllContact,createContact,getSingleContact, updatedContact,deletedContact} = require("./contactController");

router.get("/",getAllContact)
router.post("/",createContact)
router.get("/:id",getSingleContact)
router.put("/:id",updatedContact)
router.delete("/:id",deletedContact)


module.exports = router