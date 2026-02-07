const express =require('express')
const userModel=require('../model/user.model')
const jwt=require('jsonwebtoken');

const authRouter=express.Router();

authRouter.post("/register",async (req,res)=>{
    const {email,name,password}=req.body;
    const isUserAlreadyExist=await userModel.findOne({email});
    console.log(isUserAlreadyExist)
    if(isUserAlreadyExist){
       return res.status(409).json({
            msg:"user Already Exist"
        })
    }

    console.log(req.body)
    res.status(201).json({
        msg:"note created"
    })
})

module.exports=authRouter
