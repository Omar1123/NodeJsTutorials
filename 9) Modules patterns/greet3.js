function Greetr() {
    this.greeting = 'Hello word!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();