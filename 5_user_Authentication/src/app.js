const express=require('express')
const dotenv=require("dotenv")
const connectDB=require('./db/db.js')
const userRouter=require('./routes/auth.routes.js')
const cookieparser=require('cookie-parser')
const userPost=require('./routes/post.routes.js')

dotenv.config()
connectDB()

const app=express()
app.use(express.json())
app.use(cookieparser())

app.use("/api/auth",userRouter)
app.use('/api/post',userPost)


module.exports=app