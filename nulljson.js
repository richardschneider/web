/**
 * Created by apple on 12/18/15.
 */

'use strict';
const mung = require('express-mung');

/* Convert null json to empty document {} */
function nulljson(body, req, res) {
    console.log('nulljson');
    if ((body === null) || (body == 'null')) {
        body = '{}'; // --------------->>>>>>>> [3]
    }
    return body;
}

module.exports = mung.json(nulljson);