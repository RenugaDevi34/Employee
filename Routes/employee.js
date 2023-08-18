const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Employee=require('../models/employee')


router.post('/employee',(req,res,next)=>{
    const emp= new Employee({
        ...req.body,
    })
    emp.save().then((result)=>{
        res.status(200).json({
            emploeeId: result.noteId,
            email:result.email,
            secret: result.secret,
            position: result.position,
            description: result.description,
            createdAt:result.createdAt,
            updatedAt:result.updatedAt
        })
    })
})



module.exports=router;