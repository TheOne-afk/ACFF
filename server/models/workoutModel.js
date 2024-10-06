const mongoose = require('mongoose') // Schema cuz mongodb is schemaless

const Schema = mongoose.Schema

// Schema it just adding some types to the values
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

// Creating a model for our schema, a Model that has a multiply method lists.
module.exports = mongoose.model('Workout', workoutSchema)