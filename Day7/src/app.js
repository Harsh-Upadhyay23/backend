const express=require('express')



const app=express()
app.use(express.json())

app.post('/notes', (req,res)=>{
    console.log(req.body)
    res.status(201).json({
      msg:"note created"
    })
})
app.get('/notes',(req,res)=>{
  res.status(200).json({
   msg:"notes"
  })
})


 
module.exports =app