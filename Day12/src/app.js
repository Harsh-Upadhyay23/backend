const express=require('express')
const app=express();
const cors=require('cors');
const authRouter = require('./routes/auth.routes');

app.use(express.json());
app.use(cors());

app.use('/api/auth',authRouter)

module.exports=app;