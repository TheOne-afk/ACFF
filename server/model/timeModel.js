const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
})

const TimeModel = module.exports = mongoose.model('Time',timeSchema)
module.exports = { TimeModel }