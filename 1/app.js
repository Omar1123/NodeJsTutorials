function greet() {
  console.log("Hi");
}

greet();

function logGreeting(fn) {
  fn();
}

var greetMe = function() {
  console.log('Hi Tony');
}

logGreeting(greetMe);
