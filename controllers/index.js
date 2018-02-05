const express = require('express')

let router = express.Router()

router.get('/', function(req,res){
    res.render('index')
})

router.use('/instructions', require('./instructions'))
router.use('/data', require('./data'))

module.exports= router;