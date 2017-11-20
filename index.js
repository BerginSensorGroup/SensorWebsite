var express = require('express')
var model = require('./model.js')
var controller = require('./controller.js')
var path = require('path')
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

// Route Simply Contains a variable that sees how many times this is targeted
app.get('/target', function (req, res) {
	res.send('Target!')
})

// Route Establishes New Database
app.post('/air',  function(req, res){
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
	res.send('Hi!');
})

// Send Fake Test Data
app.get('/test',  function(req, res){
	controller.testair(function(fakedata,err){
		if(err)
		{
			console.log(err);
		}
		else{
			console.log(fakedata);
			res.send('Hi!');
		}
	});
})

// Send Fake Test Data
app.post('/testair',  function(req, res){
	controller.testair(function(fakedata,err){
		if(err)
		{
			console.log(err);
		}
		else{
			console.log(fakedata);
			res.send('Hi!');
		}
	});
})

// Listen for requests
app.listen(app.get('port'), function () {
	console.log('Sensor Website listening on port 3000!');
})
