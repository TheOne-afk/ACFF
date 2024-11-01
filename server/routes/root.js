const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
}) // only match if the request route is only a slash

module.exports = router