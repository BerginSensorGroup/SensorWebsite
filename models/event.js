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

    db.get().query("INSERT INTO events SET ?", [pmdata], function (err, result) {
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