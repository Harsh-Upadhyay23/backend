const express=require('express')
const app=express();

app.use(express.json());

let notes=[{name:"Harsh"}];
app.post('/notes',(req,res)=>{
  console.log(req.body)
  notes.push(req.body);
  res.status(201).json({
    msg:"note created"
  })
})
app.get('/notes',(req,res)=>{
  res.send(notes)
})

module.exports=app;