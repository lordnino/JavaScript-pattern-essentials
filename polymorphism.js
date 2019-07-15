let Animal = function(home) {
    this.home = home;
}

Animal.prototype = {
    say: () => {
        console.log(`I live in a ${this.home}`);
    }
}

let Swan = function (skin, move, talk) {
    this.skin = skin;
    this.move = move;
    this.talk = talk;
}
Swan.prototype = new Animal('pond');

let Monkey = function (skin, move, talk) {
    this.skin = skin;
    this.move = move;
    this.talk = talk;
}
Monkey.prototype = new Animal('jungle');

let Elephant = function (skin, move, talk) {
    this.skin = skin;
    this.move = move;
    this.talk = talk;
}
Elephant.prototype = new Animal('zoo');

let animals = [];
let swan = new Swan("Feathers", () => console.log('fly'), () => console.log('honk'));
let monkey = new Monkey('Furr', () => console.log('I climb'), () => console.log('ohh ohh'))
let elephant = new Elephant('Thick ski', () => console.log('I walk'), () => console.log('Trumpet'))

animals.push(swan);
animals.push(monkey);
animals.push(elephant);

for (var i = 0, len = animals.length; i < len; i++) {
        console.log(animals[i].say());
        console.log(animals[i].skin);
        console.log(animals[i].move());
        console.log(animals[i].talk());
}