let Car = function () {
    this.wheels = 4;
    this.doors = 4;
}

let Toyota = function(color) {
    this.color = color;
}

Toyota.prototype = new Car(); // set Car as 'ancestor' object

let toyota = new Toyota('red');
console.log(toyota.color);                  // => red
console.log(toyota.wheels);                 // => 4
console.log(toyota.doors);                  // => 4

console.log(toyota instanceof Toyota);      // => true
console.log(toyota instanceof Car);         // => true
console.log(toyota instanceof Object);      // => true