var express = require('express')
var model = require('./model.js')
var controller = require('./controller.js')
var path = require('path')
var app = express()

// Static files (html/css/js)
app.use(express.static(path.join(__dirname, 'public')));

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
	res.send('Hello Chris!')
})

app.get('/target', function (req, res) {
	res.send('Target!')
})

app.get('/air',  function(req, res){
	controller.database();
	res.send('Hi!');
})

app.get('/test',  function(req, res){
	controller.connect();
	controller.testair();
	res.send('Hi!');
})

// Listen for requests
app.listen(app.get('port'), function () {
	console.log('Sensor Website listening on port 3000!');
})
