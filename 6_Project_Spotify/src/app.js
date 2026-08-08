require('dotenv').config()
const cookieparser=require('cookie-parser')
const express = require('express')
const connectDB=require('../src/DB/db.js')
const authRouter=require('./routes/auth.routes.js')

const app=express()
connectDB()

app.use(express.json())
app.use(cookieparser())

app.use('/api/auth',authRouter)

module.exports=app