const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
})

// Register logic - this don't work then using an arrow function
userSchema.statics.register = async function (username,email,password){
    // findOne - on this statement when you find a same email throw an Error
    const usernameExists = await this.findOne({username})
    const emailExists = await this.findOne({email})

    if(usernameExists || emailExists){
        throw Error('Username or Email already uses')
    }

    // hash password - genSalt(value) = the higher the number the more hard to hackers to crack the password but also it takes longer to user to signup aswell
    const hashPass = await bcrypt.genSalt(10) // default value
    const hash = await bcrypt.hash(password, hashPass)

    const user = await this.create({username, email, password: hash})

    return user

}

module.exports = mongoose.model('User', userSchema)