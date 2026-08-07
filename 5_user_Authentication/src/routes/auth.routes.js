const express=require('express')
const {registerUser}=require('../controllers/auth.controllers.js')

const router=express.Router()

router.post('/register',registerUser)
router.get('/test',(req,res)=>{
    console.log("cookies",req.cookies);
    res.json({
        message:"Test Route",
        cookies:req.cookies
    })
})

module.exports=router