const express = require('express')
let router = express.Router()

router.get('/hardcase', function(req,res){
	res.render('hardcaseenclosure')
})

router.get('/professional', function(req, res){
	res.render('professionalenclosure')
})

router.get('/diy', function(req, res){
	res.render('diyenclosure')
})

router.get('/3dprinted', function(req, res){
	res.render('3dprintedenclosure')
})

module.exports= router;