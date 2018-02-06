const express = require('express')
const air = require('./air')
const chart = require('./chart')
let router = express.Router()

router.get('/', function(req,res){
    res.render('index')
})

module.exports = router