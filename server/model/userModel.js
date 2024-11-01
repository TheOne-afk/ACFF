const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
})


// Register logic - this don't work then using an arrow function
userSchema.statics.register = async function (username,email,password){

    // validation
    if(!username  || !email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }

    // findOne - on this statement when you find a same email throw an Error
    const usernameExists = await this.findOne({username})
    const emailExists = await this.findOne({email})

    if(usernameExists || emailExists){
        throw Error('Username or Email already uses')
    }

    const user = await this.create({username, email, password})

    return user

}

// Login logic
userSchema.statics.login = async function(username,password){
    // validation
    if(!username  || !password) {
        throw Error('All fields must be filled')
    }
    const findUser = await this.findOne({username})
    if(!findUser){
        throw Error('Incorrect Username')
    }
    return findUser
}

module.exports = mongoose.model('User', userSchema)