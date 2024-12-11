const mongoose = require('mongoose')
const Schema = mongoose.Schema

const esp32Model = new Schema({
    userId: {
        type: String
    },
    esp32ID: {
        type: String
    },
    wifiConnectTime: {
        type: String
    }
})

const esp32 = module.exports = mongoose.model('esp32Info',esp32Model)
module.exports = { esp32 }