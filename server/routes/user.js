const express = require('express')

const { loginUser, 
        registerUser, 
        getUser, 
        manualActivation, 
        getTimedFeed, 
        postTimedFeed, 
        deleteTimedFeed, 
        logsTimeFeed, 
        getLogsTimedFeed,
        esp32CamID
      } = require('../controller/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// register route
router.post('/register', registerUser)

// get user
router.get('/:id', getUser)

// FeederShare hardware - manual active
router.patch('/toggle-type', manualActivation) 

// FeederShare hardware - get timed feed
router.get('/:id/get-times', getTimedFeed)

// FeederShare hardware - post timed feed
router.post('/set-time', postTimedFeed)

// FeederShare hardware - delete timed feed
router.delete('/delete-time', deleteTimedFeed)

// FeederShare time feed logs
router.post('/logs-feed', logsTimeFeed)

// FeederShare get time feed logs
router.get('/:id/get-logs', getLogsTimedFeed)

// FeederShare update esp32 id
router.patch('/esp32',esp32CamID)

router.get("/stream", (req, res) => {
    res.redirect(`http://192.168.100.32/stream`);
  });

module.exports = router