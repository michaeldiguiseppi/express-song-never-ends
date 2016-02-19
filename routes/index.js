var express = require('express');
var routes = require('./routes');
var router = express.Router();


/* GET home page. */

router.get('/:verse?', function(req, res, next) {
    var verse = req.params.verse;
    if (verse === 'verse-2') {
        console.log('Why: ', req.params);
        routes['/verse-2'](req, res);
    } else if (verse === 'verse-3') {
        console.log('Maybe? ', req.params.verse);
        routes['/verse-3'](req, res);
    } else if (verse === 'verse-4') {
        routes['/verse-4'](req, res);
    } else {
        routes['/'](req, res);
    }
    console.log(req.params.verse);
});


// router.get('/', function(req, res, next) {
//     var verse1 = 'This is the song that never ends';
//     var image = 'http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg';
//   res.render('index', { verse: verse1, image: image, next: '/verse-2' });
// });

// router.get('/verse-2', function(req, res, next) {
//     var verse2 = 'It just goes on and on my friends';
//     var image = 'http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg';
//     res.render('index', {verse: verse2, image: image, next: '/verse-3'});
// });

// router.get('/verse-3', function(req, res, next) {
//     var verse3 = 'Some people, started singing it, not knowing what it was';
//     var image = 'http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg';
//     res.render('index', {verse: verse3, image: image, next: '/verse-4'});
// });

// router.get('/verse-4', function(req, res, next) {
//     var verse4 = 'And they\'ll continue singing it forever just because';
//     var image = 'http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg';
//     res.render('index', {verse: verse4, image: image, next: '/'});
// });

module.exports = router;


/*

make a new file, with a routes object, of new objects inside it.  Each new object will have the verse text, image url, and a next route.  I will parse the query string to see if something comes after, and if so, pull the route object that matches.

*/







