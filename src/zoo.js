var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
}

Zoo.prototype.changeLocation = function(x) {
  this.location = x;
  return x;
};

Zoo.prototype.openZoo = function() {
  if (this.status === 'closed') {
    this.status = 'open';
    return this.status;
  }
};

Zoo.prototype.closeZoo = function() {
  if (this.status === 'open') {
    this.status = 'closed';
    return this.status;
  }
};

Zoo.prototype.isOpen = function() {
  if (this.status !== 'closed') {
    return 'Open!';
  } else {
    return 'Closed.';
  }
};

Zoo.prototype.addAnimal = function(x) {
  if (this.status === 'open') {
    if (this.animals.indexOf(x) === -1) {
      x = new Animal();
      return this.animals.push(x);
    }
  }
};

Zoo.prototype.removeAnimal = function(remove) {
  if (this.status === 'open') {
    this.animals.splice(remove);
    return this.animals;
  }
};


module.exports = Zoo;
