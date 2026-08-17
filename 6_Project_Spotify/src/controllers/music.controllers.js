const musicModel=require("../models/music.model.js")
const jwt=require('jsonwebtoken')
const {uploadFile}=require("../services/storage.service.js")

async function createMusic(req,res) {
    
    const token=req.cookies.token;

    if (!token) {
        return res.status(404).json({message:"Unauthorized"})
    }

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        
        if (decoded.role!=="artist") {
            return res.status(401).json({message:"You don't have the access to create a music"})
        }

    } catch (err) {
        return res.status(404).json({message:"Unauthorized"})
    }

    const {title}=req.body;
    const {file}=req.file;

    const result=await uploadFile(file.buffer.toString('base64'))

    const music=musicModel.create({
        uri:result.uri,
        title,
        artist:decoded.id,
    })

    res.status(200).json({
        message:"Music Created Successfully",
        music:{
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist
        }
    })
}

module.exports={createMusic}