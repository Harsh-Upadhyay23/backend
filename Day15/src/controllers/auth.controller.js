const userModel = require('../model/user.model')
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken")

async function registerController(req,res){
  const {email,username,password,bio,profileEmage}=req.body;
   const isUserExist =await userModel.findOne({$or:[{username},{email}]})

   if(isUserExist){
      return res.status(409).json({
         message: "user already exists"+((isUserExist.email===email)?" with this email":" with this username")
      })
   }
   
   const hash= await bcrypt.hash(password,10)

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
}

async function loginController(req,res){

 const { email, password, username } = req.body;

const user = await userModel.findOne({
  $or: [
    { email: email },
    { username: username }
  ]
});

if(!user){
   return res.status(404).json({
      message:"user not found"
   })
}



const isPasswordValid= await bcrypt.compare(password,user.password)

if(!isPasswordValid){
   return res.status(401).json({
      message:"password incorrect"
   })
}
 const token=jwt.sign({
   user:user._id
 },process.env.JWT_SECRET,{expiresIn:"1d"})

 res.cookie('token',token)
 res.status(201).json({
   message:"user logged in",
   user:{
      username:user.name,
      email:user.email,
      bio:user.bio,
      profileImage:user.profileImage
   }
 
 })

}
module.exports = {
    registerController,
    loginController
}