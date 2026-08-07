const express=require('express')
const router=express.Router()
const jwt=require("jsonwebtoken")
const userModel=require('../models/user.model.js')
router.post('/create',async(req,res)=>{
    const token=req.cookies.token;
    // console.log("Token:", token);
    // console.log("Headers:", req.headers);

    if(!token){
       return res.status(401).json({
            message:"Unauthorized"
        })
    }

    
    try {
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        // console.log(decoded);
        const user=await userModel.findOne({
            _id:decoded.id
        })
        console.log(user);
        
        
    } catch (error) {
        res.status(401).json({
            message:"Token is invalid"
        })
    }

    res.send("post created successfully ")
})


module.exports=router