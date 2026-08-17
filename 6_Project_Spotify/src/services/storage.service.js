const {imageKit}=require('@imagekit/nodejs')
const { Folders } = require('@imagekit/nodejs/resources/index.js')

const ImageKitClient=new imageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(file) {
    const result=ImageKitClient.files.upload({
        file,
        filename:"music_"+Date.now(),
        folder:"backend_sctrach/music"       
    })
    return result
}

module.exports={uploadFile}