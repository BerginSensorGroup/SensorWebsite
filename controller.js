var mysql = require('mysql');
var exports = module.exports;
var connection;

var connect = exports.connect =  function(){
  var connection = mysql.createConnection({
    host     : 'berginlabdb.cyatkbygf3ox.us-east-1.rds.amazonaws.com',
    port     : '3306',
    user     : 'berginlab',
    password : 'Mike*sandals',
    database : 'testair'
  });

  connection.connect(function(err) {
    if (err)
    {
      console.log('err');
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });
}

var testair = exports.testair = function(){
  var fakedata = {
    photon_id:'1',
    time:(new Date()).toJSON(),
    pm2:Math.random()
  }
  connection.query("INSERT INTO test (photon_id, time, pm2) VALUES ?", [fakedata], function(err, result){
    if(err) {
      console.log('err');
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log("Inserted :" + result);
    console.log("Inserted Fake Information");
  });
}

var database = exports.database = function(){
  var connection = mysql.createConnection({
    host     : 'berginlabdb.cyatkbygf3ox.us-east-1.rds.amazonaws.com',
    port     : '3306',
    user     : 'berginlab',
    password : 'Mike*sandals'
  });

  connection.connect(function(err) {
    if (err)
    {
      console.log('err');
      console.error('error connecting: ' + err.stack);
      return;
    }
    connection.query("CREATE DATABASE testdb", function(err, result){
      if(err) {
        throw err
      }
      console.log("Result:" + result);
      console.log("Database created");
    });
    console.log('connected as id ' + connection.threadId);
  });
}
