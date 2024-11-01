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
    origin: ['https://acff.vercel.app/'],
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/',require('./routes/root'))

// 404 not found
app.all('*', (req,res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }
    else if(req.accepts('json')){
        res.json({message: "404 Not Found"})
    }
    else{
        res.type('txt').send('404 Not Found')
    }
})

// Example user route
router.get('/', (req, res) => {
    res.json({message: "HELLO"});
});

// middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/user', userRoutes)

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
