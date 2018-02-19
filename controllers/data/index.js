const express = require('express')
const _ = require('underscore')
const url = require('url');
const device = require('./device')
const chart = require('./chart')
const csv = require('./csv')
let router = express.Router()

router.get('/', function (req, res) {
    res.render('data')
})

router.post('/', function (req, res) {
    if (req.body.data_type == "Graphical") {
        return res.redirect(url.format({
            pathname: "/data/chart/" + req.body.device_id,
            query: _.pick(req.body, _.identity)
        }))
    }
    else {
        return res.redirect(url.format({
            pathname: "/data/csv/" + req.body.device_id,
            query: _.pick(req.body, _.identity)
        }))
    }
})

router.use('/chart', chart)
router.use('/device', device)
router.use('/csv', csv)

module.exports = router