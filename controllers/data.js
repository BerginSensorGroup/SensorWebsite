const express = require('express')
const air = require('./air')
const chart = require('./chart')
var db = require('../db')
var model = require('../model')
let router = express.Router()

router.use('/chart', chart)
router.use('/air', air)

module.exports = router