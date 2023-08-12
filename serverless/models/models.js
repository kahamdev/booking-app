const mongoose = require('mongoose')



const PersonTemplate = new mongoose.Schema(
  {
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    gender:{type:String,required:true}
  }
)

// const person=mongoose.model('PersonalData',PersonTemplate)



module.exports = mongoose.model('PersonalData',PersonTemplate)