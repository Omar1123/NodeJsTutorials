//Revealing module pattern: Exposing only the properties and methods you want via an returned object

var greet = require('./greet1.js');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello word!';

var greet3b = require('./greet3');
greet3b.greet();

var greet4 = require('./greet4').greet;
greet4();
