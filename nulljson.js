/**
 * Created by apple on 12/18/15.
 */

'use strict';
const mung = require('express-mung');

/* 
 * Convert null json to empty document {} 
 *
 *   @param {Object} the JSON body as an object.
 */

function nulljson(body, req, res) {
    console.log('nulljson');
    body = body || {};
    return body;
}

module.exports = mung.json(nulljson);