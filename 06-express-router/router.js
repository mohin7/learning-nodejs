const router = require("express").Router();

router.get("/",(req,res)=>{
  res.send("Get Response Call");
})
router.post("/",(req,res)=>{
  res.send("POST Response Call");
})
router.put("/",(req,res)=>{
  res.send("PUT Response Call");
})

module.exports = router