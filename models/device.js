var db = require('../db.js')
var _ = require('underscore')

// Add and Register Devices NOTE:UNTESTED
exports.addDevice = function (public_device_id, project_id){
    db.get().query("INSERT INTO devices SET ?", [public_device_id, project_id], function(err, results, fields){
        if(err){
            console.error('error connecting: ' + err.stack);
        }
        done(null, results)
    })
}

// Retrieves data for this specific device
exports.getDevice = function (device_id, new_params, done) {
    var default_params = {
		begin_date:'0000-00-00', 
		end_date: (new Date()).toISOString().substring(0, 10),
		begin_event:'1',
		end_event:'2147483647' //max int value 
    }
    
    var final_params = _.defaults(new_params,default_params)

    var begin_date = final_params.begin_date;
    var end_date = final_params.end_date;
    var begin_event = final_params.begin_event;
    var end_event = final_params.end_event;

    db.get().query("SELECT * FROM `events` WHERE device_id = ? and date >= ? and date <= ? and event_id >= ? and event_id <= ?", [device_id, begin_date, end_date, begin_event, end_event], function (err, results, fields) {
        if (err) {
            console.log('err');
            console.error('error connecting: ' + err.stack);
            done(err);
        }

        console.log("with dates between : " + final_params.begin_date + " and " + final_params.end_date)
        console.log("with events between : " + final_params.begin_event + " and " + final_params.end_event)
        done(null, results)
    });
}

// Retrieves id's for all devices
exports.getAllDeviceNames = function (done) {

    var queryAllDeviceIDS = "SELECT DISTINCT `device_id` FROM `events`"

    db.get().query(queryAllDeviceIDS, function (err, results, fields) {
        if (err) {
            console.log('err');
            console.error('error connecting: ' + err.stack);
            done(err);
        }

        done(null, results)
        console.log("Returned results");
    });
}