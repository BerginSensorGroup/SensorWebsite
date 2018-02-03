var express = require('express')
var model = require('./model.js')
var controller = require('./controller.js')
var db = require('./db.js')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()

// Use EJS template engine
app.set('view engine', 'ejs')

// Set views directory to public
app.set('views', path.join(__dirname, 'public'))

// Static files (html/css)
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Define the port to run on
app.set('port', process.env.PORT || 3000);

// Home Page
app.get('/', function (req, res) {
	res.render('html/index');
})

app.get('/overview', function (req, res) {
	res.render('html/overview')
})

app.get('/materials', function (req, res) {
	res.render('html/materials')
})

app.get('/hardcaseenclosure', function(req,res){
	res.render('html/hardcaseenclosure')
})

app.get('/professionalenclosure', function(req, res){
	res.render('html/professionalenclosure')
})

app.get('/diyenclosure', function(req, res){
	res.render('html/diyenclosure')
})

app.get('/3dprintedenclosure', function(req, res){
	res.render('html/3dprintedenclosure')
})

app.get('/pcbparts', function (req, res) {
	res.render('html/pcbparts')
})

app.get('/fielddeployment',function(req,res){
	res.render('html/fielddeployment')
})

app.get('/sensortesting', function(req,res){
	res.render('html/sensortesting')
})

app.get('/datavisualization', function(req,res){
	res.render('html/datavisualization')
})

app.get('/teensysoftware', function(req,res){
	res.render('html/teensysoftware')
})

app.get('/assemblepackages', function (req, res) {
	res.render('html/assemblepackages')
})

app.get('/appendixa', function(req,res){
	res.render('html/appendixa')
})

app.get('/appendixb', function(req,res){
	res.render('html/appendixb')
})

app.get('/appendixc', function(req,res){
	res.render('html/appendixc')
})

app.get('appendixd', function(req,res){
	res.render('html/appendixd')
})

app.get('/chart/:deviceid', function (req, res) {
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
			res.render('html/chart', {
				datapoints : datapoints,
			});
		}
	})
})

// Route Inserts PM2 Data
app.post('/air', function (req, res) {
	console.log(req.body);
	controller.air(req.body, function (err, data) {
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
app.get('/air/pm2/:deviceid', function (req, res) {
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
app.get('/air/device', function (req, res) {
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


// Listen for requests
app.listen(app.get('port'), function () {
	console.log('Sensor Website listening on port 3000!');
})
