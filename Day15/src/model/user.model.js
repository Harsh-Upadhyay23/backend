const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"user name already exists"],
        required:[true,"user name is required"]
    },
    email:{
        type:String,
        unique:[true,"Email already exists"],
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/44sgupisj/default-avatar-profile-icon-social-600nw-1906669723.webp"
    }
})

const userModel=mongoose.model("userModel",userSchema);
module.exports=userModel