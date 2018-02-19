const express = require('express')
let router = express.Router()
var _ = require('underscore')
var air = require('../../../models/device.js')

// Route Inserts PM2 Data
router.post('/', function (req, res) {
	console.log(req.body);
	air.insertData(req.body, function (err, data) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(data);
			res.send('Data Inserted');
		}
	});
})

//Display device names
router.get('/devices', function (req, res) {
	air.getAllDeviceNames(function (err, results) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Querying for all device names");
			res.send(results);
		}
	})
})

// Route Queries for Device information
router.get('/devices/:device_id', function (req, res) {
	console.log("Device Requested: " + req.params.device_id);
	var device_id = req.params.device_id;

	var new_params ={
		begin_date:req.query.begin_date,
		end_date:req.query.end_date,
		begin_event:req.query.begin_event,
		end_event:req.query.end_event
	}

	air.getDevice(device_id, new_params, function (err, results) {
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