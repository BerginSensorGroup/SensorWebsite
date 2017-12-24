var mysql = require('mysql');
var exports = module.exports;

exports.getDevice = function(photon_id, callback){
  var connection = mysql.createConnection({
    host     : 'berginlabdb.cyatkbygf3ox.us-east-1.rds.amazonaws.com',
    port     : '3306',
    user     : 'berginlab',
    password : 'Mike*sandals',
    database : 'air'
  });

  connection.query("SELECT * FROM `pm2` WHERE `photon_id` = ?", [photon_id], function(err, results, fields){
    if(err) {
      console.log('err');
      console.error('error connecting: ' + err.stack);
      callback(null, err);
    }

    console.log("Returned results");
    connection.end(function(err){
      if(err)
      {
        console.log(err);
        console.error('error connecting: ' + err.stack);
      }
      console.log('Ended connection');
      callback(null, results);
    });
  });
}