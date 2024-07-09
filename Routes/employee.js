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
            employeeId: result.noteId,
            email:result.email,
            secret: result.secret,
            position: result.position,
            description: result.description,
            createdAt:result.createdAt,
            updatedAt:result.updatedAt
        })
    })
})


router.get('/employee/email',(req,res)=>{

  
    try{

        const email=req.query.email;
        const secret=req.headers.secret;
    
       
        console.log(email,secret)
        Employee.findOne({email:email}).then((result)=>{
            console.log({result})
            if(result)
                {
                        if(result.secret===secret)              {
                        res.status(200).json({
                            employeeId: result.noteId,
                            email:result.email,
                            secret: result.secret,
                            position: result.position,
                            description: result.description,
                            createdAt:result.createdAt,
                            updatedAt:result.updatedAt

                        })
                        }else{
                            res.status(401).json({
                                error:"Unauthorized"
                            })
                        }
                }else{
                    res.status(404).json({
                        error:"no employees found"
                    })
                }   
        })

    }catch(e){
        res.status(500).send({'error':Internal});

    }
})




router.put('/employee/:email',(req,res)=>{

  
    try{

        const email=req.params.email;
        const secret=req.headers.secret;
        const position=req.body.position;
        const description=req.body.description;
       
        console.log(email,secret)
        Employee.findOneAndUpdate({email:email},{position:position,description:description},{returnOriginal: false}).then((result)=>{
            console.log({result})
            if(result)
                {
                        if(result.secret===secret)              {
                        res.status(200).json({
                            employeeId: result.noteId,
                            email:result.email,
                            secret: result.secret,
                            position: result.position,
                            description: result.description,
                            createdAt:result.createdAt,
                            updatedAt:result.updatedAt

                        })
                        }else{
                            res.status(401).json({
                                error:"Unauthorized"
                            })
                        }
                }else{
                    res.status(404).json({
                        error:"no employees found"
                    })
                }   
        })

    }catch(e){
        res.status(500).send({'error':Internal});

    }
})



router.delete('/employee/:email',(req,res)=>{

  
    try{

        const email=req.params.email;
        const secret=req.headers.secret;
        
        console.log(email,secret)
        Employee.findOneAndDelete({email:email}).then((result)=>{
            console.log({result})
            if(result)
                {
                        if(result.secret===secret)              {
                        res.status(200).json({
                            employeeId: result.noteId,
                            email:result.email,
                            secret: result.secret,
                            position: result.position,
                            description: result.description,
                            createdAt:result.createdAt,
                            updatedAt:result.updatedAt

                        })
                        }else{
                            res.status(401).json({
                                error:"Unauthorized"
                            })
                        }
                }else{
                    res.status(404).json({
                        error:"no employees found"
                    })
                }   
        })

    }catch(e){
        res.status(500).send({'error':Internal});

    }
})


module.exports=router;