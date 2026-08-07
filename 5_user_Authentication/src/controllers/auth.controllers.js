const userModel=require('../models/user.model.js')
const jwt=require('jsonwebtoken')

const  registerUser=async(req,res)=> {
    const {username,gmail,password}=req.body;
    console.log(req.body);
    console.log("Searching for:", gmail);
    const isUserExists=await userModel.findOne({
        gmail
    })

    if (isUserExists) {
        res.status(409).json({
            message:"User Already Exists"
        })
    }

    const user=await userModel.create({
        username,gmail,password
    })

    const token=jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)
    res.status(200).json({
        message:"User Registered Successfully",
        user:user,
        // token:token
    })

}

module.exports={registerUser}