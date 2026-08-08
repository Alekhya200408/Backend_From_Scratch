const userModel=require('../models/user.models.js')
const jwt=require('jsonwebtoken')
const cookie=require('cookie-parser')
const bcrypt=require('bcryptjs')

const registerUser=async(req,res)=>{
    const {username,email,password,role='user'}=req.body;

    const isUserExists=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if (isUserExists) {
        return res.status(409).json({message:"User Already Exists"})
    }
    const hash=await bcrypt.hash(password,10)

    const user=await userModel.create({
        username,
        email,
        password:hash,
        role
    })


    const token=jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message:"User Created Successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
    })

}

const loginUser=async(req,res)=>{
    const {username,email,password}=req.body;

    const user=await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if (!user) {
        return res.status(401).json({
            message:"Invalid Credentials"
        })
    }

    const isPasswordValid=await bcrypt.compare(password,user.password)

    if (!isPasswordValid) {
        return res.status(401).json({
            message:"Invalid Credentials"
        })
    }

     const token=jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message:"User LoggedIn Successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
})

}

module.exports={registerUser,loginUser}