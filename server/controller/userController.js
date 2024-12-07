const jwt = require('jsonwebtoken')
const User = require('../model/userModel')

const createToken = (_id) =>{
    //       payloader      the secret       user only have 3days to login and the token epxired
  return  jwt.sign({_id}, "adobojwtformyacff", { expiresIn: '3d' })
}

// login user
const loginUser = async (req,res) => {
    const {username,password} = req.body

    try {
        const user = await User.login(username,password)

        // create a token
        const userIdLogin = user._id;
        const token = createToken(userIdLogin)

        res.status(200).json({username, token, userIdLogin})
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

// register user
const registerUser = async function(req,res){

    const {username,email,password} = req.body

    try {
        const user = await User.register(username,email,password)

        // create a token
        const userId = user._id;
        const token = createToken(userId)

        res.status(200).json({username, token})
    }
    catch (error){
        res.status(400).json({error: error.message})
    }

}

// get single user
const getUser = async (req,res) =>{
    // geting the url id whenever a user got the id from the url or type
    const { id } = req.params

    const user = await User.findById(id)

    if (!user){
        return res.status(404).json({error: "No such user"})
    }
    res.status(200).json(user)

}

// FeederShare hardware logic
const manualActivation = async (req, res) => {
    const { _id } = req.body;

    // Find the user and set type to true
    const user = await User.findByIdAndUpdate(_id, {
        type: true
    }, { new: true });  // Ensure you get the updated document

    if (!user) {
        return res.status(500).json({ message: "Error updating type" });
    }

    res.status(200).json({ message: "'type' set to true, will revert to false after delay via MongoDB Trigger" });
};

module.exports = { loginUser, registerUser, getUser, manualActivation }