//Enviroment variables: Global variables specific to enviroment(server) out code is living in.
//Http method: Especifies the type of action the request wishes to make(GET; POST; DELETE)
//Middleware: Code that sits between two layers of software

var express = require('express');
var app = express();

var port = process.env.PORT || 4000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function(req,res) {
    res.render('index');
});

app.get('/person/:id', function(req,res) {
    res.render('person', { ID: req.params.id });
});

app.get('/api', function(req,res) {
    res.json({ firstname: 'Jacobo', lastname: 'Veliz'});
});

app.listen(port);
