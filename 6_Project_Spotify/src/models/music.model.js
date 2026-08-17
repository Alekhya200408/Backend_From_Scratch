const mongoose=require('mongoose')

const musicScheema=new mongoose.Schema({
    uri:{
        type:String,
        required:True
    },
    title:{
        type:String,
        required:True
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:True
    }
})

const musicModel=mongoose.model('music',musicScheema)

module.exports=musicModel