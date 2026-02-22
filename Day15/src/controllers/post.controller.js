// const postModel=require('../model/post.model');


// async function createPostController(req, res) {

//  console.log(req.body,req.file );
//  res.status(200)
// }

// module.exports={createPostController}

const Post = require('../model/post.model');

const createPostController = async (req, res) => {
  try {
    const { caption } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required"
      });
    }

    const newPost = await Post.create({
      caption,
      image: req.file.path,
      user: req.user?.id
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: newPost
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message
    });
  }
};

module.exports = { createPostController };