const mongoose=require('mongoose');
const TokenSchema=new mongoose.Schema({
    userID:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    },
    sentTime:{
        type:String
    }
   
},{timestamps:true}); 

module.exports=mongoose.model("Token",TokenSchema);