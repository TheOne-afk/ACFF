const express = require('express')

const { loginUser, registerUser } = require('../controller/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// register route
router.post('/register', registerUser)
console.log('/api/user')

module.exports = router