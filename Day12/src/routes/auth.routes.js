const express = require('express')
const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken');

const authRouter = express.Router();

/* REGISTER */
authRouter.post("/register", async (req, res) => {
    const { email, name, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });
    if (isUserAlreadyExist) {
        return res.status(400).json({
            msg: "User already exists"
        });
    }

    const user = await userModel.create({
        email,
        password,
        name
    });

    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET
    );

    res.cookie("jwt_token", token);

    res.status(201).json({
        msg: "User registered successfully"
    });
});


/* LOGIN */
authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(404).json({
            msg: "User not found"
        });
    }

    // ⚠️ Plain password comparison (bcrypt recommended later)
    if (user.password !== password) {
        return res.status(401).json({
            msg: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET
    );

    res.cookie("jwt_token", token);

    res.status(200).json({
        msg: "Login successful"
    });
});

module.exports = authRouter;
