import Register from "../../models/Register";
import connectDb from "../../middleware/mongoose";

const handler = async (req , res)=>{
 if(req.method =='POST'){ 
    console.log(req.body);
    let register = await Register.findOne({"email": req.body.email})
    if(register){
       if(req.body.email == register.email && req.body.password== register.password){
          res.status(200).json({success:true,email:register.email,name: register.fname})
         }
         else{
            res.status(200).json({success:false,error:"Invalid Credentials"})
         }
      }
      else{
         res.status(200).json({success:false,error:"No User found"})
      }
 }
 else{
  res.status(400).json({error:"this method is not allowed"})
 }
}

export default connectDb(handler)