// npm i dotenv
require('dotenv').config()
// install json first by. npm init -y
// install express by npm i express --save
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// express app
const app = express()

// middleware
app.use(express.json())

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    
// listen for request
// listen(port,function) 
// without nodemon install globally - This function will only execute by typing node server.js again.
// installing nodemon by. npm i -g nodemon
// with nodemon install globally - This function will execute everytime the file saved. 
app.listen(process.env.PORT, () =>{
    console.log(`Connection successfully`)
})
    
})
.catch((error)=>{
    console.log(error)
})
