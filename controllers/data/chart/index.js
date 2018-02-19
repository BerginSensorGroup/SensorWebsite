const express = require('express')
let router = express.Router()
var device = require('../../../models/device.js')

router.get('/', function(req,res){
    res.render('index')
})

router.get('/:deviceid', function (req, res) {
    console.log("Device Requested: " + req.params.deviceid);
    var device_id = req.params.device_id;

	var new_params ={
		begin_date:req.query.begin_date,
		end_date:req.query.end_date,
		begin_event:req.query.begin_event,
		end_event:req.query.end_event
	}
    device.getDevice(req.params.deviceid, new_params, function (err, results) {
        if (err) {
            console.log(err);
        }
        else {
            var datapoints = [];
            var datapoints_event_id_pm10 = [];
            var datapoints_event_id_pm25 = [];
            var datapoints_event_id_pm100 = [];
            var datapoints_event_id_tpm10 = [];
            var datapoints_event_id_tpm25 = [];
            var datapoints_event_id_tpm100 = [];
            console.log("Results returned");
            for (i = 1; i < results.length; i = i + 1) {
                datapoints_event_id_pm10.push({
                    x: results[i].event_id,
                    y: results[i].pm10,
                });
                datapoints_event_id_pm25.push({
                    x: results[i].event_id,
                    y: results[i].pm25,
                });
                datapoints_event_id_pm100.push({
                    x: results[i].event_id,
                    y: results[i].pm100,
                });
                datapoints_event_id_tpm10.push({
                    x: results[i].event_id,
                    y: results[i].tpm10,
                });
                datapoints_event_id_tpm25.push({
                    x: results[i].event_id,
                    y: results[i].tpm25,
                });
                datapoints_event_id_tpm100.push({
                    x: results[i].event_id,
                    y: results[i].tpm100,
                });

            }
            datapoints = [datapoints_event_id_pm10, datapoints_event_id_pm25, datapoints_event_id_pm100, datapoints_event_id_tpm10, datapoints_event_id_tpm25, datapoints_event_id_tpm100]
            res.render('chart', {
                datapoints: datapoints,
            });
        }
    })
})

module.exports= router;