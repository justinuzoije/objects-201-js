var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker'
};

var superman = {
  name: 'Superman',
  realName: 'Clark Kent'
};

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

function sayHi() {
  console.log('I am ' + this.name + '!');
}

function revealIdentity() {
  console.log('My real name is ' + this.realName + '.');
}

//This attaches the say hi function to spiderman and superman
// spiderman.sayHi = sayHi;
// superman.sayHi = sayHi;

//Calls the function
// spiderman.sayHi();
// superman.sayHi();

//This attaches the reveal identity function
//Function name dot apply then put in the object that wants it as the parameter
// revealIdentity.apply(spiderman);
// revealIdentity.apply(superman);

//The revealIdentity function is not permanently attached to the spiderman object
//This saves memory, so to call it you do not explicitly ask for the
//spiderman's revealIdentity variable
// revealIdentity();

//Write code using __proto__ to make daughter inherit properties from mom.
//What are the daugther's properties and their values? Print them out.

//You can make an object inherit
//child dot duner proto equals parent
// daughter.__proto__ = mom;
//
// //This log's each value requested to the console
// console.log(daughter.firstName, daughter.lastName, daughter.eyeColor, daughter.hairColor);

//Add a method called showInfo to mom by attaching a function to it as a property.
//Calling this method will print out all four properties. Call this method on both mom and daugther.


//
// var showInfo = function() {
//   console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
// };
//
// mom.showInfo = showInfo;
// daughter.showInfo = showInfo;
//
// mom.showInfo();
// daughter.showInfo();

// function Person(name) {
//   this.name = name;
//   this.friends = [];
//   this.greet = function(){
//     console.log(this.createGreeting(other));
//   };
// }
//
// Person.prototype.addFriend = function(friend) {
//   this.friends.push(friend);
// };
//
// Person.prototype.createGreeting = function(other) {
//   return 'Yo ' + other.name + '! from ' + this.name + '.';
// };

// Person.prototype.greet = function(other) {
//   console.log(this.createGreeting(other));
// };

function Person(name) {
  this.name = name;
  this.friends = [];
  this.greet = function(){
    console.log(this.createGreeting(other));
  };
}

Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
};

Person.prototype.createGreeting = function(other) {
  return 'Yo ' + other.name + '! from ' + this.name + '.';
};
