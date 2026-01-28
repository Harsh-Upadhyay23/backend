const express = require('express');
const app=express();
app.use(express.json)

let students=[];

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.post('/student',(req,res)=>{
    students.push(req.body)
})
app.listen(3000,()=>{
    console.log("server is runing on 3000");
    
})