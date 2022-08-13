const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
  firstName:  String, 
  lastName: String,
  body:   String,
  mobiles:{
    type:String,
    unique:true,
    required:true
  },
  emailId:String,
  gender:{
    type:String,
    enum:["male" , "female", "LGBTQ"] //"falana" will give an error
  },
  age:Number

  
},  {timestamps: true});

//assignment
const bookSchema=new mongoose.Schema({
    bookName:String,
    authorName : String,
    category :String,
    year:Number
     
},{ timestamps: true })

module.exports=mongoose.model('User',userSchema)
module.exports = mongoose.model('Books', bookSchema)
