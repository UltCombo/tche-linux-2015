
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());


var tasks = [];


app.get('/tasks', function(req, res) {
  res.send(tasks);
});

app.post('/task/create', function(req, res) {
  tasks.push(req.body);
  res.send({ success: true });
});


app.use('/', express.static(__dirname + '/public'));





var port = 8080;

app.listen(port);

console.log('Listening on port ' + port);
