var Animal = require('./animal');

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status = status || 'closed';
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
  if (this.animals.indexOf(x) < 0) {
    this.animals.push(x);
    return this.animals.length;
  } else {
    return 'Animal aready in zoo you fool!';
  }
};

Zoo.prototype.removeAnimal = function(x) {
  if (x === undefined) {
    return 'Please specifiy which animal you want to remove';
  }
  if (this.status === 'open') {
    var find = this.animals.indexOf(x);
    this.animals.splice(find, 1);
  }
  return this.animals;
};

module.exports = Zoo;
