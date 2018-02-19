var db = require('../db.js')
var _ = require('underscore')

// NOTE THIS IS STILL UNTESTED
exports.insertData = function (data, done) {
    var pmdata = {
        date: (new Date()).toJSON(),
        device_id: data.device_id,
        pm10: data.pm10,
        pm25: data.pm25,
        pm100: data.pm100,
        tpm10: data.tpm10,
        tpm25: data.tpm25,
        tpm100: data.tpm100
    }

    db.get().query("INSERT INTO pm2 SET ?", [pmdata], function (err, result) {
        if (err) {
            console.log('err');
            console.error('error connecting: ' + err.stack);
            done(err, null);
        }
        console.log("Inserted :" + result);
        console.log("Inserted Fake Information");
    });

    done(null, pmdata);
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

    db.get().query("SELECT * FROM `pm2` WHERE device_id = ? and date >= ? and date <= ? and event_id >= ? and event_id <= ?", [device_id, begin_date, end_date, begin_event, end_event], function (err, results, fields) {
        if (err) {
            console.log('err');
            console.error('error connecting: ' + err.stack);
            done(err);
        }

        done(null, results)
        console.log("with dates between : " + final_params.begin_date + " and " + final_params.end_date)
        console.log("with events between : " + final_params.begin_event + " and " + final_params.end_event)
    });
}

// Retrieves id's for all devices
exports.getAllDeviceNames = function (done) {

    var queryAllDeviceIDS = "SELECT DISTINCT `device_id` FROM `pm2`"

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