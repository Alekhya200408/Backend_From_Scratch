const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
    gmail:{
        type:String,
        unique:true
    },
    password:String,
})

const usermodel=mongoose.model("User",userSchema);

module.exports=usermodel