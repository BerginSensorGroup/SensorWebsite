var express = require('express')
var fs = require('fs')
var controllers = require('./controllers')
var path = require('path')
var bodyParser = require('body-parser')
var model = require('./model.js')
var db = require('./db.js')
var app = express()

// Use EJS template engine
app.set('view engine', 'ejs')

// Set views directory to public
// app.set('views', path.join(__dirname, 'views'))

// Static files (html/css)
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Define the port to run on
app.set('port', process.env.PORT || 3000);

// Load All Routes
app.use('/', controllers)

// app.get('/chart/:deviceid', function (req, res) {
// 	console.log("Device Requested: " + req.params.deviceid);
// 	db.getDevice(req.params.deviceid, function (err, results) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		else {
// 			var datapoints=[];
// 			var datapoints_event_id_pm10 = [];
// 			var datapoints_event_id_pm25 = [];
// 			var datapoints_event_id_pm100 = [];
// 			var datapoints_event_id_tpm10 = [];
// 			var datapoints_event_id_tpm25 = [];
// 			var datapoints_event_id_tpm100 = [];
// 			console.log("Results returned");
// 			for (i = 1; i<results.length; i = i + 1) {
// 				datapoints_event_id_pm10.push({
// 					x: results[i].event_id,
// 					y: results[i].pm10,
// 				});
// 				datapoints_event_id_pm25.push({
// 					x: results[i].event_id,
// 					y: results[i].pm25,
// 				});
// 				datapoints_event_id_pm100.push({
// 					x: results[i].event_id,
// 					y: results[i].pm100,
// 				});
// 				datapoints_event_id_tpm10.push({
// 					x: results[i].event_id,
// 					y: results[i].tpm10,
// 				});
// 				datapoints_event_id_tpm25.push({
// 					x: results[i].event_id,
// 					y: results[i].tpm25,
// 				});
// 				datapoints_event_id_tpm100.push({
// 					x: results[i].event_id,
// 					y: results[i].tpm100,
// 				});

// 			}
// 			datapoints = [datapoints_event_id_pm10, datapoints_event_id_pm25, datapoints_event_id_pm100, datapoints_event_id_tpm10, datapoints_event_id_tpm25, datapoints_event_id_tpm100]
// 			res.render('chart', {
// 				datapoints : datapoints,
// 			});
// 		}
// 	})
// })

// // Route Inserts PM2 Data
// app.post('/air', function (req, res) {
// 	console.log(req.body);
// 	model.air(req.body, function (err, data) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		else {
// 			console.log(data);
// 			res.send('Data Inserted');
// 		}
// 	});
// 	// res.send('Inserting Air Information!');
// })

// // Route Queries for Device information
// app.get('/air/pm2/:deviceid', function (req, res) {
// 	console.log("Device Requested: " + req.params.deviceid);
// 	db.getDevice(req.params.deviceid, function (err, results) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		else {
// 			console.log("Results returned");
// 			res.send(results);
// 		}
// 	})
// 	//res.send('Querying for Device ID');
// })


// //Display device names
// app.get('/air/device', function (req, res) {
// 	db.getAllDevices(function (err, results) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		else {
// 			console.log("Results returned");
// 			res.send(results);
// 		}
// 	})
// 	//res.send('Querying for Device ID');
// })


// Listen for requests
app.listen(app.get('port'), function () {
	console.log('Sensor Website listening on port 3000!');
})
