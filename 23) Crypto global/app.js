const aes = require('aes-cross');

function encript(text) {

    let key = new Buffer([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6]);
    let enc = aes.encText(text,key);

    return enc;
}

function decrypt(text) {

    let key = new Buffer([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6]);
    let dec = aes.decText(text,key);

    return dec;
}



//console.log('enc:%s',enc);
//let dec = aes.decText(enc,key);
//console.log('dec:%s',dec);
