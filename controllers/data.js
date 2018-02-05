const express = require('express')
var db = require('../db')
var model = require('../model')
let router = express.Router()

router.get('/chart/:deviceid', function (req, res) {
	console.log("Device Requested: " + req.params.deviceid);
	db.getDevice(req.params.deviceid, function (err, results) {
		if (err) {
			console.log(err);
		}
		else {
			var datapoints=[];
			var datapoints_event_id_pm10 = [];
			var datapoints_event_id_pm25 = [];
			var datapoints_event_id_pm100 = [];
			var datapoints_event_id_tpm10 = [];
			var datapoints_event_id_tpm25 = [];
			var datapoints_event_id_tpm100 = [];
			console.log("Results returned");
			for (i = 1; i<results.length; i = i + 1) {
				datapoints_event_id_pm10.push({
					x: results[i].event_id,
					y: results[i].pm10,
				});
				datapoints_event_id_pm25.push({
					x: results[i].event_id,
					y: results[i].pm25,
				});
				datapoints_event_id_pm100.push({
					x: results[i].event_id,
					y: results[i].pm100,
				});
				datapoints_event_id_tpm10.push({
					x: results[i].event_id,
					y: results[i].tpm10,
				});
				datapoints_event_id_tpm25.push({
					x: results[i].event_id,
					y: results[i].tpm25,
				});
				datapoints_event_id_tpm100.push({
					x: results[i].event_id,
					y: results[i].tpm100,
				});

			}
			datapoints = [datapoints_event_id_pm10, datapoints_event_id_pm25, datapoints_event_id_pm100, datapoints_event_id_tpm10, datapoints_event_id_tpm25, datapoints_event_id_tpm100]
			res.render('chart', {
				datapoints : datapoints,
			});
		}
	})
})

// Route Inserts PM2 Data
router.post('/air', function (req, res) {
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

// Route Queries for Device information
router.get('/air/pm2/:deviceid', function (req, res) {
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

module.exports = router