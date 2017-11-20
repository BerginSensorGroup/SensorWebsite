var mysql = require('mysql');
var exports = module.exports;
var connection;

exports.connect =  function(callback){
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
      callback(err);
    }
    console.log('connected as id ' + connection.threadId);
    callback(null);
  });
}

exports.testair = function(callback){
  var connection = mysql.createConnection({
    host     : 'berginlabdb.cyatkbygf3ox.us-east-1.rds.amazonaws.com',
    port     : '3306',
    user     : 'berginlab',
    password : 'Mike*sandals',
    database : 'testair'
  });

  var fakedata = {
    photon_id:'1',
    time:(new Date()).toJSON(),
    pm2:Math.random()
  }

  connection.query("INSERT INTO testdata SET ?", [fakedata], function(err, result){
    if(err) {
      console.log('err');
      console.error('error connecting: ' + err.stack);
      callback(null,err);
    }
    console.log("Inserted :" + result);
    console.log("Inserted Fake Information");
  });

  connection.end(function(err){
    if(err)
    {
      console.log(err);
      console.error('error connecting: ' + err.stack);
    }
    console.log('Ended connection');
    callback(fakedata, null);
  });
}

exports.database = function(){
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
