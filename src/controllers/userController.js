const userModel=require("../models/userModel")

     const creatUser= async function(req, res){
    let data =req.body
    let savedData= await userModel.create(data)
    res.send({msg: savedData})
}


const getUsersData=async function(req, res) {
    let allUsers =  await userModel.find()
     res.send({msg: allUsers})
}

//assignment
const getBooks=async function(req,res){
    let getBook=await userModel.find()
    res.send({msg:getBook})
    
}
const addBooks=async function(req,res){
    let bdata=req.body
    let savedBookData=await userModel.create(bdata)
    res.send({Books:savedBookData})
}
module.exports.getBooks= getBooks
module.exports.addBooks= addBooks

module.exports.creatUser=creatUser
module.exports.getUsersData=getUsersData