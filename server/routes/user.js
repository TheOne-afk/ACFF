const express = require('express')

const { loginUser, registerUser, getUser } = require('../controller/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// register route
router.post('/register', registerUser)

// get user
router.get('/:id', getUser)

module.exports = router