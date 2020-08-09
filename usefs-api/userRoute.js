const router = require('express').Router()
let {getAllUsers,createUser} = require('./userController');

router.get("/",getAllUsers)
router.post("/",createUser)


module.exports = router;