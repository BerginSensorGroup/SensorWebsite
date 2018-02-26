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

// Route Queries for Device Events
router.get('/devices/:device_id', function (req, res) {
	console.log("Device Requested: " + req.params.device_id);
	var device_id = req.params.device_id;

	var new_params ={
		begin_date:req.query.begin_date,
		end_date:req.query.end_date,
		begin_event:req.query.begin_event,
		end_event:req.query.end_event
	}

	event.getEvent(device_id, new_params, function (err, results) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Querying for device: " + device_id);
			res.send(results);
		}
	})
})

module.exports= router;