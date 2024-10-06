const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkout = async (req,res) => {
    const workouts= await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// get a single workout
const getSingleWorkout = async (req,res) =>{
    const {id} = req.params // get the id which is in the url

    // prevent crashing
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

// create new workout
const createWorkout = async (req,res) => {
    const {title, load, reps} = req.body

    // add to db
    try {
        // without adding the async so if the we a variable that has workout in it which is also a variable
        // it executed so that will display as none cuz we are waiting to created the db
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout) // 200 means ok
    }
    catch(error){
        res.status(404).json({error: error.message}) // 400 means error 
    }
}

// delete a workout
const deleteWorkout = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getSingleWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
}