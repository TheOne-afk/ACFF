const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logsTimeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    timestamp: {
        type: String,
    },
    status: {
        type: String
    },
    result: {
        type: String
    }
})

const LogsTime = module.exports = mongoose.model('LogsTime',logsTimeSchema)
module.exports = { LogsTime }