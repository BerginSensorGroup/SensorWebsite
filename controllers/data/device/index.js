const express = require('express')
let router = express.Router()
var _ = require('underscore')
var device = require('../../../models/device.js')
var project= require('../../../models/project.js')

router.get('/', function(req,res){
	res.render('device')
})

//Route Adds Device NOTE: UNTESTED
router.get('/add', function(req,res){
	project.getAllProjects(function(err, results){
		if(err){
			console.log(err);
			console.log("Error retrieving devices");
		}
		else{
			res.render('device-add');
		}		
	})
})

//Route Adds Device NOTE: UNTESTED
router.post('/add', function(req,res){
	var public_device_id = req.body.public_device_id;
	var project_name = req.body.project_name;

	device.addDevice(req.body.public_device_id, req.body.project_name, function(err, results){
		if(err) {
			console.log(err)
		}
		else{
			console.log("Added Device!");
			res.redirect('/data/device/added');
		}
	})
})

router.get('/added', function(req,res){
    res.render('device-added');
})

//Display device names
router.get('/devices', function (req, res) {
	device.getAllDeviceNames(function (err, results) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Querying for all device names");
			res.send(results);
		}
	})
})



module.exports= router;