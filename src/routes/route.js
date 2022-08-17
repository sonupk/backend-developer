const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)



router.get("/getBooksData", BookController.getBooksData)


//assignment solution is here
router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.booksList);

//takes year as input in post request
router.post("/getBooksInYear", BookController.getBookInYear);

router.get("/getXINRBooks", BookController.getXINRBooks);

//take particular input and give getParticularBooks---
router.post("/getParticularBooks", BookController.getParticularBook);

//getRandomBooks - returns books that are available in stock
router.get("/getRandomBooks", BookController.getRandomBooks);



module.exports = router;