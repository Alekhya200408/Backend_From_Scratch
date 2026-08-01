const mongoose=require('mongoose')

async function connDB(){
    await mongoose.connect('mongodb+srv://alex-backend:lSIjCaG2yO4hHeqH@cluster0.cwfy9lj.mongodb.net/mary')

    console.log('Database Connected');
    
}

module.exports=connDB