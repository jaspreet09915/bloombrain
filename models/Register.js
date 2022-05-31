const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
 fname : {type:String , required: true},
 lname :  {type:String , required:true},
 city : {type:String , required: true},
 phone : {type:Number, required:true},
 altNum : {type:Number , required:true},
 email :   {type:String , required:true, unique:true},
 childrenClass:{type:String,required:true},
 password :   {type:String , required:true},
},{timestamps:true});
mongoose.models ={}
export default mongoose.model("Register", UserSchema);

// export default mongoose.model.User || mongoose.model("User",UserSchema);

