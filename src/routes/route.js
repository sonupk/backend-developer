const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const externalModule = require('../logger/logger')
const utilHelperModule=require('../util/helper')
const validFormatter=require('../validator/formatter')

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    externalModule.welcome()
    utilHelperModule.printDate()
    utilHelperModule.printMonth()
    utilHelperModule.getBatchInfo()
    console.log("string after triming: "+validFormatter.trimName)
    console.log("string after lower case: "+validFormatter.toLower)
    console.log("string after upper case: "+validFormatter.toUpper)
    
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason