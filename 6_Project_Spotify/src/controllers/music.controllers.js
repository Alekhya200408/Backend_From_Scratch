const musicModel = require("../models/music.model.js")
const jwt = require('jsonwebtoken')
const { uploadFile } = require("../services/storage.service.js")

async function createMusic(req, res) {

    const token = req.cookies.token;
    console.log("TOKEN:", req.cookies.token);

    if (!token) {
        return res.status(404).json({ message: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        console.log("DECODED:", decoded)

        if (decoded.role !== "artist") {
            return res.status(401).json({ message: "You don't have the access to create a music" })
        }



        const { title } = req.body;
        const  file  = req.file;

        const result = await uploadFile(file.buffer.toString('base64'))

        console.log("IMAGEKIT RESULT:", result);

        const music =await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id,
        })

        res.status(200).json({
            message: "Music Created Successfully",
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist
            }
        })

    }
    catch (err) {
        console.log(err);
        
        return res.status(404).json({ 
             message: "Something went wrong",
            error: err.message
        })
    }
}

module.exports = { createMusic }