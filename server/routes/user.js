const express = require('express')

const { loginUser, registerUser, getUser, manualActivation } = require('../controller/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// register route
router.post('/register', registerUser)

// get user
router.get('/:id', getUser)

// FeederShare hardware - manual active
router.patch('/toggle-type', manualActivation) 

router.get("/stream", (req, res) => {
    res.redirect(`http://192.168.100.32/stream`);
  });

module.exports = router