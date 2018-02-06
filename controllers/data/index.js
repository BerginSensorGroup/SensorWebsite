const express = require('express')
const air = require('./air')
const chart = require('./chart')
const csv = require('./csv')
let router = express.Router()

router.get('/', function(req,res){
    res.render('index')
})

router.use('/chart', chart)
router.use('/air', air)
router.use('/csv', csv)

module.exports = router