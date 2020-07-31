const route = require("express").Router();
const {getAllUser ,getSingleUser,createUser,updateUser,deleteUser} = require("./userController");

route.get("/",getAllUser);
route.get("/:id",getSingleUser);
route.post("/",createUser);
route.put("/:id",updateUser);
route.delete("/:id",deleteUser);

module.exports = route;