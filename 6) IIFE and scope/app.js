//Immediately Invoked Function Expressions(IIFE)
//Scope: Access to a particular variable or function
var firstname = 'Omar';

(function (lastname) {

  var firstname = 'Omar';
  console.log(firstname);
  console.log(lastname);

}('Doe'));

console.log(firstname);
