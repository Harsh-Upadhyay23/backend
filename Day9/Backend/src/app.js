const express=require('express')
const app=express();
const employeeModel=require('./models/employee.model.js') 

app.use(express.json());

 

app.post('/api/employee',(req,res)=>{
   employeeModel.create(req.body).then(
    res.status(201).json(
       { msg:"employee created"}
    )
   )
})
app.get('/api/employee',async (req,res)=>{
 const data=await employeeModel.find()
 res.status(200).json({data:data})
})





module.exports =app;