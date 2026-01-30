const mongoose=require('mongoose');

async function  connectToDb(){
   const connection=await mongoose.connect('mongodb://localhost:27017/')
   console.log("connected to db");
}

module.exports= connectToDb