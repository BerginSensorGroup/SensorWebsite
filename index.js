const express = require('express')
const app = express()
app.set('port' process.env.port 3000);
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})