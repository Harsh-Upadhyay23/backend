const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,'img URL required for creating an post']
    },
    user:{
        ref:'user',
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'User id is required for creating an post']
    }
})
const postModel=mongoose.model("post",postSchema)
module.exports=postModel