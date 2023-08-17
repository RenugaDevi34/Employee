const express=require('express')
const app=express()
const mongoose=require('mongoose')
const employeerouter=require('./Routes/employee')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("database connected")
})
.catch((e)=>{
    console.log(e)
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.use(employeerouter);

module.exports=app;