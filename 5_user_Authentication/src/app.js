const express=require('express')
const dotenv=require("dotenv")
const connectDB=require('./db/db.js')
const userRouter=require('./routes/auth.routes.js')

dotenv.config()
connectDB()

const app=express()
app.use(express.json())

app.use("/api/auth",userRouter)


module.exports=app