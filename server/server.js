require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const router = express.Router();
const cors = require('cors')

// epxress app
const app = express()

app.use(cors({
    origin: "https://acff.vercel.app/",
    methods: ["POST","GET","PUT","DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

// Example user route
router.get('/', (req, res) => {
    res.json({ message: 'User route accessed!' });
});

// middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('acff-api.vercel.app/api/user', userRoutes)

// connecto db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, () =>{
        console.log('connected to db')
    })
})
.catch((error)=>{
    console.log(error)
})
