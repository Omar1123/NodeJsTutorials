//Asynchronous: More that one process running simulateneously
//Synchronous: One proccess executing at time
//Callbacks: A function passed to some other function which we assume will be invoked at some point
//Non-blocking: Doing other things without stopping your programming from running
//BUffer: A temporaly holding spot for data being moved one place to another
//Stream: A sequence of data made available over time
//Binary data: Data stored in Binary
/*var buf = new Buffer('Hello','utf8');
console.log(buf);
console.log(buf.toString());*/

function greet(callback) {
    console.log('Hello');

    var data = {
        name: 'Omar Veliz'
    };

    callback(data);
}

greet(function(data) {
    console.log("The callback was invoked");
    console.log(data);
});

greet(function(data) {
    console.log("A different callback was invoked");
    console.log(data);
});