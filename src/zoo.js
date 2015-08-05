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

Zoo.prototype.open = function(newStatus) {
  if (this.status === 'closed') {
    this.status = 'open';
    return this.status;
  }
};

Zoo.prototype.close = function() {
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

Zoo.prototype.addAnimal = function(newAnimal) {
  if (this.status === 'open') {
    if (this.animals.indexOf(newAnimal) === -1) {
      newAnimal = new Animal(w,x,y,z);
      return newAnimal;
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
