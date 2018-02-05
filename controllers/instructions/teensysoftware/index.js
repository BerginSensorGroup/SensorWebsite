const express = require('express')

let router = express.Router()

router.get('/mac', function(req,res){
	res.render('teensysoftware-mac')
})

router.get('/pc', function(req,res){
	res.render('teensysoftware-pc')
})

router.get('/programming', function(req,res){
	res.render('teensysoftware-programming')
})

module.exports= router;