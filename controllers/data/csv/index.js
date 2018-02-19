const express = require('express')
const device = require('../../../models/device.js')
const csv = require('../../../middleware/csv.js')
let router = express.Router()

router.get('/', function (req, res) {
    res.render('data')
})

router.get('/:deviceid', function (req, res) {
    var device_id = req.params.deviceid;
    console.log("Device Requested: " + req.params.deviceid);

    var new_params = {
        begin_date: req.query.begin_date,
        end_date: req.query.end_date,
        begin_event: req.query.begin_event,
        end_event: req.query.end_event
    }
    device.getDevice(device_id, new_params, function (err, results) {
        if (err) 
        {
            console.log(err);
        }
        else {
            csv.create(device_id, results, function(err, filename){
                if(err)
                {
                    console.log(err);
                }
                res.download(filename)
            })
        }
    })
})

module.exports = router