const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    time: {
        type: String,
    }
})

const TimeModel = module.exports = mongoose.model('Time',timeSchema)
module.exports = { TimeModel }