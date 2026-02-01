const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:String,
    img:String,
    job_title:String,
    age:Number
})

const employeeModel=mongoose.model("employee",userSchema);
module.exports =employeeModel;