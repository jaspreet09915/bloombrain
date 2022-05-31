const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email :   {type:String , required:true, unique:true},
    password :   {type:String , required:true},
   },{timestamps:true});
mongoose.models ={}
export default mongoose.model("Order", OrderSchema);

// export default mongoose.model.User || mongoose.model("User",UserSchema);
