const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController");
const moment = require("moment");


//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

//assignment solution is here

router.post("/creatAuthor", authorController.creatAuthor);
router.post("/creatBook", authorController.creatBook);

router.post("/authorBookList", authorController.authorBookList);
router.post("/BookName", authorController.BookName);

router.get("/findBookBetween", authorController.findBookBetween);




module.exports = router;