const postModel=require('../model/post.model');


async function createPostController(req, res) {

 console.log(req.body,req.file );
 res.status(200)
}

module.exports={createPostController}