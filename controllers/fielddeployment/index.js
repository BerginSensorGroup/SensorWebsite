const express = require('express')

let router = express.Router()

router.get('/hardcase',function(req,res){
	res.render('fielddeployment-hardcase')
})

router.get('/diy',function(req,res){
	res.render('fielddeployment-diy')
})

module.exports= router;