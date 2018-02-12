const express = require('express')
const air = require('../../../models/air.js')
const csv = require('../../../middleware/csv.js')
let router = express.Router()

router.get('/', function (req, res) {
    res.render('data')
})

router.get('/:deviceid', function (req, res) {
    console.log("Device Requested: " + req.params.deviceid);
    var device_id = req.params.device_id;

    var new_params = {
        begin_date: req.query.begin_date,
        end_date: req.query.end_date,
        begin_event: req.query.begin_event,
        end_event: req.query.end_event
    }
    air.getDevice(req.params.deviceid, new_params, function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            csv.create(results)
            res.render('index')
            // res.download('')
        }
    })
})

module.exports = router