var db = require('../db.js')

// In case we ever want to recreate the database
exports.database = function () {
    var connection = mysql.createConnection({
        host: 'berginlabdb.cyatkbygf3ox.us-east-1.rds.amazonaws.com',
        port: '3306',
        user: 'berginlab',
        password: 'Mike*sandals'
    });

    connection.connect(function (err) {
        if (err) {
            console.log('err');
            console.error('error connecting: ' + err.stack);
            return;
        }
        connection.query("CREATE DATABASE testdb", function (err, result) {
            if (err) {
                throw err
            }
            console.log("Result:" + result);
            console.log("Database created");
        });
        console.log('connected as id ' + connection.threadId);
    });
}