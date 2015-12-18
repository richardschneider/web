var express = require('express');
var router = express.Router();
var logger = require('../../logger/logger');


/* GET /api home page. */
router.get('/', function(req, res, next) {
    res.send('welcome to api');
});

router.get('/version', function(req, res, next) {
    var data = {
        version: '0.1'
    };
    res.json(data);
});

router.get('/cinema', function(req, res, next) {
    var data = [
        {
            id: '0001',
            name: 'XXX Cineplex'
        },
        {
            id: '0002',
            name: 'YYY Cineplex'
        }
    ]
    res.json(data);
});

router.get('/cinema/:cinema_id', function(req, res, next) {
    var cinema_id = req.params.cinema_id;
    var data = null; // real code will be db driver query which will return null if not found
    if (cinema_id == '0001') {
        data = {
            id: '0001',
            name: 'XXX Cineplex'
        };
    }
    else if (cinema_id == '0002') {
        data = {
            id: '0002',
            name: 'YYY Cineplex'
        };
    }
    res.json(data);
});

module.exports = router;
