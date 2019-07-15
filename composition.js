let Engine = function () {
    this.cylinders = 4;
}

let Car = function () {
    this.engine = new Engine();
}

let ford = new Car();
console.log(ford.engine.cylinders);