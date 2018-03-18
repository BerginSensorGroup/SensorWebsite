const express = require('express')
let router = express.Router()
const teensysoftware = require('./teensysoftware')
const enclosures = require('./enclosures')
const datavisualization = require('./datavisualization')
const fielddeployment = require('./fielddeployment')


router.get('/overview', function(req,res){
    res.render('overview')
})

router.get('/materials', function (req, res) {
	res.render('materials')
})

router.get('/pcbparts', function (req, res) {
	res.render('pcbparts')
})

router.get('/sensortesting', function(req,res){
	res.render('sensortesting')
})

router.get('/sdcardprogramming', function(req,res){
	res.render('sdcardprogramming')
})

router.get('/additionalfiles', function(req,res){
	res.render('additionalfiles')
})

router.get('/faq', function(req,res){
	res.render('faq')
})

router.get('/photos', function(req,res){
	res.render('photos')
})

// Sub Routes
router.use('/enclosures', enclosures)

router.use('/datavisualization', datavisualization)

router.use('/teensysoftware', teensysoftware)

router.use('/fielddeployment', fielddeployment)

module.exports = router
