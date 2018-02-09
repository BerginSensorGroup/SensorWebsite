const express = require('express')
const air = require('../../../models/air.js')
let router = express.Router()

router.get('/', function(req,res){
    res.render('index')
})

module.exports = router