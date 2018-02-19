const express = require('express')
let router = express.Router()
var _ = require('underscore')
var device = require('../../../models/device.js')

// THIS IS A PLACEHOLDER FOR NOW
router.get('/', function(req,res){
    res.render('project');
})

module.exports= router;