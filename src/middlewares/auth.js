
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const authenticate =async function (req, res, next) {
 try{
  //check the token in request header
  let token = req.headers["x-auth-token"];
  if (!token) token = req.headers["x-Auth-token"];
  //validate this token
  if (!token) {//bad request
    return res.status(400).send({ status: false, msg: "token must be present" });
  }
  let decodedToken = jwt.verify(token, "functionup-plutonium");
  
  if (!decodedToken) {//bad request
    return res.status(400).send("token is invalid");
  }
  next()
  }catch(err){
    res.status(403).send({msg:"err",error:err.message})
  }
};

const authorise =async function (req, res, next) {
  try{
  // comapre the logged in user's id and the id in request
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-plutonium");
  console.log(decodedToken)
  if (decodedToken.userId === req.params.userId) {
       let userId = req.params.userId;
      // finding autherise user 
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
         // user not found
         return res.status(404).send({ status: false, msg: "No such user exists" });
      next();
  } else {//authentication missing
    return res.status(401).send({status: false, msg: 'your are not autherise to access'});
  }
  }catch(err){// server side error
    res.status(500).send({msg:"err",error:err.message})
  }
 
};


module.exports.authenticate=authenticate
module.exports.autherise=authorise