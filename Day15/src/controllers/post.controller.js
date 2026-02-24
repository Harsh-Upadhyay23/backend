const postModel=require('../model/post.model')
const ImageKit =require('@imagekit/nodejs')
const {toFile}=require('@imagekit/nodejs');
const { Folders } = require('@imagekit/nodejs/resources/index.js');
const jwt=require('jsonwebtoken')


const imagekit =  new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})


async function createPostController(req, res) {
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"token not provided,Unauthorized access"
        })
    }

    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    console.log(decoded)
    const file=await imagekit.files.upload({
    file:await toFile(Buffer.from(req.file.buffer),'file'),
    fileName:'Test',
    folder:"insta-clone"
 })

  
}

module.exports={createPostController}
