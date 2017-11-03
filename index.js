var express = require('express')
var model = require('./model.js')
var controller = require('./controller.js')

const app = express()
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

app.listen(app.get('port'), function () {
	console.log('Example app listening on port 3000!');
})
