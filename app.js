const express = require('express');
const app = express();
const http = require('http').Server(app);

app.set('view engine', 'hbs');
app.use('/static', express.static('static'));

app.get('/', function(request, response) {
  response.render('tutorial.hbs', {});
});

app.get('/game', function(request, response) {
  response.render('game.hbs', {});
});

http.listen(8000, function () {
  console.log('Magic happens on port 8000');
});
