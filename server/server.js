require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const router = express.Router();
const cors = require('cors')
const path = require('path')

// epxress app
const app = express()



app.use(cors({
    origin: ['https://acff.vercel.app/', 'https://acff-api.vercel.app/api/user/register'],
    credentials: true,
    optionsSuccessStatus: 200
}))


// middleware
app.use(express.json())

// Example user route
app.use('/', (req, res) => {
    res.json({message: "HELLO"});
});

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/user', (req, res) => {
    res.json({message: "/api/user"});
})

// connecto db
mongoose.connect('mongodb+srv://dawan:dawan12345678@acffdb.eitoc.mongodb.net/?retryWrites=true&w=majority&appName=acffDB')
.then(()=>{
    app.listen(4000, () =>{
        console.log('connected to db')
    })
})
.catch((error)=>{
    console.log(error)
})