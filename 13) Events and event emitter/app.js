//Event: Something that happend and in our app we can respond to
//**            Kinds of Event
//** 1)         System events = c++ core(libuv)
//** 2)         Custom Events = javascript core(Event emitter)
// Object properties and methods

var obj = {
    greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

// Functions and arrays

var arr = [];

arr.push(function() {
    console.log('Hello word 1');
}); 

arr.push(function() {
    console.log('Hello word 2');
}); 

arr.push(function() {
    console.log('Hello word 3');
}); 

arr.forEach(function(item) {
    item();
});