var routes = {
    '/': function (req, res) {
        return verse = {
            verse: 'This is the song that never ends',
            image: 'http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg',
            next: '/verse-2'
        };
    },
    '/verse-2': function (req, res) {
        return verse = {
            verse: 'It just goes on and on my friends',
            image: 'http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg',
            next: '/verse-3'
        };
    },
    '/verse-3': function (req, res) {
        return verse = {
            verse: 'Some people, started singing it, not knowing what it was',
            image: 'http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg',
            next: '/verse-4'
        };
    },
    '/verse-4': function (req, res) {
        return verse = {
            verse: 'And they\'ll continue singing it forever just because',
            image: 'http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg',
            next: '/'
        };
    }
}


module.exports = routes;