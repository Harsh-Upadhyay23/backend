const express = require('express')
const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken');
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
    const { email, name, password } = req.body;
    const isUserAlreadyExist = await userModel.findOne({ email });
    console.log(isUserAlreadyExist)

    if (isUserAlreadyExist) {
        return res.status(400).json({
            msg: "user Already Exist"
        })
    }
    const user = await userModel.create({
        email, password, name
    })
    const token = jwt.sign({
        id: user._id,
        email: user.email
    },
        process.env.JWT_SECRET
    )
    res.cookie("jwt_token",token)
    console.log(req.body)
    
    res.status(201).json({
        msg: "note created"
    })
})

module.exports = authRouter
