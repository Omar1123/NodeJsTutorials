//https://nodejs.org/dist/latest-v6.x/docs/api/

var util = require('util');

var name = 'Omar';
var greeting = util.format('Hello, %s', name);
util.log(greeting);