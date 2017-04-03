//Enviroment variables: Global variables specific to enviroment(server) out code is living in.
//Http method: Especifies the type of action the request wishes to make(GET; POST; DELETE)
//Middleware: Code that sits between two layers of software
//Rest: An architecture for building apis (Representational State Transfer)

var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');


var port = process.env.PORT || 4000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.use('/', function(req, res, next) {

    var con = mysql.createConnection({
        host: "localhost",
        user: "youruser",
        password: "test",
        database: "yourdatabase"
    });

    con.query('SELECT People.ID, FirstName, Lastname, Address FROM People INNER JOIN PersonAddress ON People.ID = PersonAddress.PersonId',
        function(err, rows) {
            if(err) throw err;
            console.log(rows);
            console.log(rows[0].Firstname);
        }
    );

    console.log('Request Url: ' + req.url);
    next();
});

apiController(app);

app.listen(port);
