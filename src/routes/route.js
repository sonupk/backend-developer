const express = require('express');
const ldash=require('lodash')
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
    //array of month chunk
    const arr1=["jan","feb","march","april","may","jun","july","aug","sept","oct","nov","dec"]
    console.log(ldash.chunk(arr1, [size=3]))
    //array of odd number tail
    const arr2=[1,3,5,7,9,11,13,15,17,19]
    console.log(ldash.tail(arr2))
    //five array merge using union
    const a1=[1,7,56]
    const a2=[60,7,1]
    const a3=[89,9,10]
    const a4=[6,4,3]
    const a5=[1,4,60]
    console.log(ldash.union(a1,a2,a3,a4,a5))
    // using fromPairs
    const movie=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(ldash.fromPairs(movie))
 res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason