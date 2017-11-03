const express = require('express')
const model = require('/model.js')
const controller = require('/controller.js')

const app = express()
	app.set('port', process.env.PORT || 3000);
	app.use('/', function (req, res) {
			res.send('Hello Chris!')
			})

app.use('/target', function (req, res) {

		res.send('Target!')
		})

app.use('/air',  function(req, res){

		res.send(200);
		})

app.listen(app.get('port'), function () {
		console.log('Example app listening on port 3000!');
		})
