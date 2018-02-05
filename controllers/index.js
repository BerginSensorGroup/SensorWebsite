const express = require('express')
var instructions = require('./instructions')
var data = require('./data')
let router = express.Router()

router.get('/', function(req,res){
    res.render('index')
})

router.use('/instructions', instructions)
router.use('/data', data)

module.exports= router;