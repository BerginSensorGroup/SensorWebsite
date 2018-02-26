const express = require('express')
let router = express.Router()
var _ = require('underscore')
const event = require('../../../models/event.js')

// Event Page NEEDS TO BE UPDATED


// Route Inserts PM2 Data
router.post('/', function (req, res) {
	console.log(req.body);
	event.insertData(req.body, function (err, data) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(data);
			res.send('Data Inserted');
		}
	});
})

// Route Queries for Device Events
router.get('/:device_id', function (req, res) {
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