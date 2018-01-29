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

app.get('/overview', function(req, res){
	res.render('html/overview')
})

app.get('/materials', function(req, res){
	res.render('html/materials')
})

app.get('/pcbparts', function(req, res){
	res.render('html/pcbparts')
})

app.get('/assemblepackages', function(req, res){
	res.render('html/assemblepackages')
})

app.get('/appendixa', function(req, res){
	res.render('html/appendixa')
})

app.get('/appendixb', function(req, res){
	res.render('html/appendixb')
})

app.get('/appendixc', function(req, res){
	res.render('html/appendixc')
})

app.get('/appendixd', function(req, res){
	res.render('html/appendixd')
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
// app.get('/air/pm2/:deviceid', function(req, res){
//   console.log("Device Requested: " + req.params.deviceid);
//   db.getDevice(req.params.deviceid, function(err, results){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log("Results returned");
//       res.send(results);
//     }
//   })
//   //res.send('Querying for Device ID');
// })







//Display device names

app.get('/air/pm2/device', function(req, res){
  db.getAllDevices(function(err, results){
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
