const express = require('express')
let router = express.Router()
var db = require('../../db')
var model = require('../../model')

// Route Inserts PM2 Data
router.post('/', function (req, res) {
	console.log(req.body);
	model.air(req.body, function (err, data) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(data);
			res.send('Data Inserted');
		}
	});
	// res.send('Inserting Air Information!');
})

//Display device names
router.get('/devices', function (req, res) {
	db.getAllDevices(function (err, results) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Results returned");
			res.send(results);
		}
	})
	//res.send('Querying for Device ID');
})

// Route Queries for Device information
router.get('/devices/:deviceid', function (req, res) {
	console.log("Device Requested: " + req.params.deviceid);
	db.getDevice(req.params.deviceid, function (err, results) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Results returned");
			res.send(results);
		}
	})
	//res.send('Querying for Device ID');
})

module.exports= router;