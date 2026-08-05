const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
    gmail:String,
    password:String,
})

const usermodel=mongoose.model("User",userSchema);

module.exports=usermodel