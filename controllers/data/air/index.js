const express = require('express')
let router = express.Router()
var air = require('../../../models/air.js')

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
	air.getAllDevices(function (err, results) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Querying for all devices");
			res.send(results);
		}
	})
})

// Route Queries for Device information
router.get('/devices/:deviceid', function (req, res) {
	console.log("Device Requested: " + req.params.deviceid);
	air.getDevice(req.params.deviceid, function (err, results) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Querying for device: " + req.params.deviceid);
			res.send(results);
		}
	})
})

module.exports= router;