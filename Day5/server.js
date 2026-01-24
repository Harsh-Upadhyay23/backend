const express=require('express')
const app=express();

app.use(express.json());

let notes=[];
app.post('/notes',(req,res)=>{
  console.log(req.body)
  res.status(201).json({
    "msg":"note created"
  })
})

app.listen(3000,()=>{
 console.log(" server is live on 3000");
 
})