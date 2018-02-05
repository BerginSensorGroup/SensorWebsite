var db = require('../db.js')

// NOTE THIS IS STILL UNTESTED
exports.insertData = function (data, done) {
    var pmdata = {
        date: (new Date()).toJSON(),
        photon_id: data.photon_id,
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
exports.getDevice = function (photon_id, params, done) {
    begin_date = params.begin_date;
    end_date = params.end_date;
    begin_event = params.begin_event;
    end_event = params.end_event;
    
    db.get().query("SELECT * FROM `pm2` WHERE photon_id = ? and date >= ? and date <= ? and event_id >= ? and event_id <= ?", [photon_id, begin_date, end_date, begin_event, end_event], function (err, results, fields) {
        if (err) {
            console.log('err');
            console.error('error connecting: ' + err.stack);
            done(err);
        }

        done(null, results)
        console.log("Returned results");
    });
}

// Retrieves id's for all devices
exports.getAllDeviceNames = function (done) {

    var queryAllDeviceIDS = "SELECT DISTINCT `photon_id` FROM `pm2`"

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