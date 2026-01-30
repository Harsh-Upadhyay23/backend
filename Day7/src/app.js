const express=require('express')
const noteModel=require("../models/notes.model")



const app=express()
app.use(express.json())

app.post('/notes',async (req,res)=>{
  const note= await noteModel.create(req.body)
    res.status(201).json({
      msg:"note created",
      note
    })
})
app.get('/notes',async (req,res)=>{
  const note= await noteModel.find();
  res.status(200).json({
   note
  })
})


 
module.exports =app