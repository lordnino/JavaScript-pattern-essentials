//accessing prototype

let document = {};

// ES5 (all modern browsers)
console.log(Object.getPrototypeOf(document)); // => [object object]

// not available in IE9 and below
console.log(document.__proto__);              // => [object object]

// available in all browsers
console.log(document.constructor.prototype);  // => [object object]