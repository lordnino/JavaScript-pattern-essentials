let Car = function () {};

Car.prototype = { make: 'Mercedes'};

let toyota = new Car();
let mercedes = new Car();

toyota.make = 'Toyota';

console.log(toyota.make);
console.log(mercedes.make);