var express = require('express');
var routes = require('./routes');
var router = express.Router();


/* GET home page. */

router.get('/:verse?', function(req, res, next) {
    var verse = req.params.verse;
    var verseRender;
    if (verse) {
        verseRender = routes['/' + verse](req, res);
    } else {
        verseRender = routes['/'](req, res);
    }
    res.render('index', verseRender);
});

module.exports = router;