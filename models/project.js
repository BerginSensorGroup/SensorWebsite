var db = require('../db.js')

// Adds Projects
exports.addProject = function(project_name, location, done)
{
    var project = {project_name:project_name, location:location}
    db.get().query("INSERT INTO projects SET ?", [project], function (err, result) {
        if (err) {
            console.log(err);
            console.error('error connecting: ' + err.stack);
            done(err, null);
        }
        console.log("Inserted :" + JSON.stringify(result));
        console.log("Inserted New Project");
        done(null, result);
    });
}

exports.getAllProjects = function(done){
    db.get().query("SELECT * FROM projects", function (err, results, fields) {
        if (err) {
            console.log(err);
            console.error('error connecting: ' + err.stack);
            done(err, null);
        }
        console.log("Retreived all Projects");
        done(null, results);
    });
}