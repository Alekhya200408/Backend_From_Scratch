const express=require('express')
const multer=require('multer')
const uploadFile=require('../services/storage.services.js')
const postModel=require('../models/Post.models.js')

const app=express()

app.use(express.urlencoded())
const upload=multer({storage:multer.memoryStorage()})

app.post('/create-post',upload.single('image'),async(req,res)=>{
    // console.log(req.body);
    // console.log(req.file);
    
    const result=await uploadFile(req.file.buffer);

    // console.log(result);
    const post=await postModel.create({
        image:result.url,
        caption:req.body.caption
    })
    
    return res.status(200).json({
        message:"Post Created",
        post
    })
})

app.get('/posts',async(req,res)=>{
    const post =await postModel.find();

    res.status(200).json({
        message:"All Posts Fetched",
        post:post
    })
})


module.exports=app
