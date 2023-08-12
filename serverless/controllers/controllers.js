const Template = require('../models/models')

const personDetails=async(req,res)=>{
    try{
        const person=await Template.create(
            { 
              firstname:req.body.firstname,
              lastname:req.body.lastname,
              phone:req.body.phone,
              email:req.body.email,
              gender:req.body.gender
            }
            )
        person.save()
        res.status(200).json({message:"Person Details Recorded"})
    }
    catch(err){
         console.log(err)
         res.status(400).json({message:"Person Details not Recorderd"})
    }
    
}


module.exports={personDetails}
