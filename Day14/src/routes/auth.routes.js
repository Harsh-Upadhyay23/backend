const express=require('express');
const userModel=require("../model/user.model")

const authRouter=express.Router();

authRouter.post('/register',async(req,res)=>{
  const {email,username,password,bio,profileEmage}=req.body;
   const isUserExistByEmail=await userModel.findOne({email})

   if(isUserExistByEmail){
      return res.status(409).json({
         message:"user already exists with this email"
      })
   }
   const isUserExistByUsername=await userModel.findOne({username})
   if(isUserExistByUsername){
      return res.status(409).json({
         message:"user already exist with this username"
      })
   }

   const user=await userModel.create({
      email,username,password,bio,profileEmage
   })
   res.status(201).json({
      message:"user created"
   })
  
})

module.exports=authRouter;