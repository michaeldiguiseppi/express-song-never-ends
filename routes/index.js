var express = require('express');
var routes = require('./routes');
var router = express.Router();


/* GET home page. */

router.get('/:verse?', function(req, res, next) {
    var verse = req.params.verse;
    if (verse) {
        routes['/' + verse](req, res);
    } else {
        routes['/'](req, res);
    }
});

module.exports = router;