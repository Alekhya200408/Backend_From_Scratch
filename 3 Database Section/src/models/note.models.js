const mongoose=require('mongoose')

const NoteSchema=new mongoose.Schema({
    title:String,
    description:String
})

const noteModel=mongoose.model("note",NoteSchema)

module.exports=noteModel