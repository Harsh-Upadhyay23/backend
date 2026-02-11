const express=require('express');
const userModel=require("../model/user.model")
const crypto=require('crypto')
const jwt=require('jsonwebtoken')

const authRouter=express.Router();

authRouter.post('/register',async(req,res)=>{
  const {email,username,password,bio,profileEmage}=req.body;
   const isUserExist =await userModel.findOne({$or:[{username},{email}]})

   if(isUserExist){
      return res.status(409).json({
         message: "user already exists"+((isUserExist.email===email)?" with this email":" with this username")
      })
   }
   
   const hash=crypto.createHash('sha256').update(password).digest('hex')

  const user=await userModel.create({
      email,username,bio,profileEmage,password :hash
   })

  

   const token=jwt.sign({
      id : user._id
   },process.env.JWT_SECRET,{expiresIn:'1d'})

   res.cookie('token',token)
   res.status(201).json({
      message:"user created",
      user
   })
})

module.exports=authRouter;