//Enviroment variables: Global variables specific to enviroment(server) out code is living in.
//Http method: Especifies the type of action the request wishes to make(GET; POST; DELETE)
//Middleware: Code that sits between two layers of software

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function(req,res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /><body><h1>Hello world!</h1></body></head></html>');
});

app.get('/person/:id', function(req,res) {
    res.send('<html><head></head><body><h1>Hello world: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req,res) {
    res.json({ firstname: 'Omar', lastname: 'Veliz'});
});

app.listen(port);
