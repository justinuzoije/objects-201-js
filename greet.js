function createPerson(name) {
  var person = {
    name: name,
    friends : []
  };

  person.greet = function(other) {
    console.log('Yo ' + other.name + '! from ' + this.name + '.');
  };

  person.lazyGreet = function() {
    setTimeout(function() {
      console.log('Hello, I am ' + this.name + '.');
    }.bind(this), 2000);
  };

  person.createGreetingsForFriends = function() {
    var greetings = [];
  };

  // Person.prototype.lazyGreet

  return person;
}

var jon = createPerson('Jon');
var bob = createPerson('Bob');

// jon.greet(bob);
jon.lazyGreet(bob);
