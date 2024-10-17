const User = require('../model/userModel')

// login user
const loginUser = async (req,res) => {
    res.json({mssg: 'login user'})
}

// register user
const registerUser = async (req,res) => {

    const {username,email,password} = req.body

    try {
        const user = await User.register(username,email,password)

        res.status(200).json({username, user})
    }
    catch (error){
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'register user'})
}


module.exports = { loginUser, registerUser }