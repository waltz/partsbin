var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'jade');

app.get('/', function (request, response) {
  response.render('index');
});

app.listen(port, function () {
  console.log('Listening on port ' + port + '.');
});
