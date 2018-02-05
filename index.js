var express = require('express')
var fs = require('fs')
var controllers = require('./controllers')
var path = require('path')
var bodyParser = require('body-parser')
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

// Connect to MongoDB on start
db.connect(db.MODE_PRODUCTION, function (err) {
	if (err) {
		console.log('Unable to connect to MySQL.')
		process.exit(1)
	} else {
		app.listen(app.get('port'), function () {
			console.log('Listening on port 3000...')
		})
	}
})

