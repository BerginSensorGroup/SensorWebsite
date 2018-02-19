const express = require('express')
let router = express.Router()
var _ = require('underscore')
var device = require('../../../models/event.js')

// Route Inserts PM2 Data
router.post('/', function (req, res) {
	console.log(req.body);
	device.insertData(req.body, function (err, data) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(data);
			res.send('Data Inserted');
		}
	});
})