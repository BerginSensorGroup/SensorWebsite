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

// Listen for requests
app.listen(app.get('port'), function () {
	console.log('Sensor Website listening on port 3000!');
})
