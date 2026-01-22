const express=require('express')
const app=express();

app.get("/",(req,res)=>{
    res.send("jooo")
})


app.listen(3000,()=>{
    console.log("server is live");
})