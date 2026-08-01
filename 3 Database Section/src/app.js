const express=require('express')
const noteModel=require('./models/note.models.js')

const app=express()

app.use(express.json())

app.post('/notes',async(req,res)=>{
    const data=req.body;
    await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(200).json({
        message:"Note Created"
    })
})

app.get('/notes',async(req,res)=>{
    const notes=await noteModel.find(); //[it returns array of object always]

    res.status(200).json({
        message:"All note Fetched",
        notes:notes
    })
})

app.delete('/notes/:id',async(req,res)=>{
    const id=req.params.id
    await noteModel.findByIdAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Note deleted Successfully"
    })
})

app.patch('/notes/:id',async(req,res)=>{
    const id=req.params.id;
    const description=req.body.description;

    await noteModel.findByIdAndUpdate({_id:id},{description:description})

    res.status(200).json({
        message:"Note Updated Successfully"
    })
})
module.exports=app