var mysql = require('mysql')

module.exports = {
  database: function(){
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'ec2-52-70-166-16.compute-1.amazonaws.com',
      port     : '3306',
      user     : 'berginlab',
      password : 'Mike*sandals'
      //user:'root',
      //password:'SUPERSECUREPASSWORD'
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
}
