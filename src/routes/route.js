const express = require('express');
const router = express.Router();
const userModel = require("../models/userModel.js")
const UserController=require("../controllers/userController")


router.get("/test-me" , function(req, res) {
    res.send("My first ever api!")
})

router.post("/createUser" , UserController.creatUser )

router.get("/getUsersData" , UserController.getUsersData)

//assignment
router.get("/getBooks" , UserController.getBooks)
router.post("/addBooks" , UserController.addBooks)



module.exports = router;