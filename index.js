var express = require('express')
var model = require('./model.js')
var controller = require('./controller.js')
var db = require('./db.js')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()

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
 	res.send('Hello Chris!');
})

// Route Inserts PM2 Data
app.post('/air',  function(req, res){
	console.log(req.body);
	controller.air(req.body, function(err,data){
		if(err)
		{
			console.log(err);
		}
		else{
			console.log(data);
			res.send('Data Inserted');
		}
	});
	// res.send('Inserting Air Information!');
})

// Route Queries for Device information
app.get('/air/pm2/:deviceid', function(req, res){
  console.log("Device Requested: " + req.params.deviceid);
  db.getDevice(req.params.deviceid, function(err, results){
    if(err){
      console.log(err);
    }
    else{
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
