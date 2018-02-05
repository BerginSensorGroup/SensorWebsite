const express = require('express')

let router = express.Router()

router.get('/install', function (req, res) {
    res.render('datavisualization-install')
})

router.get('/application', function (req, res) {
    res.render('datavisualization-application')
})

module.exports = router;