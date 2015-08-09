console.log('Begin...');
function Animal(name,age,kind,awake) {
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = awake || false;
}

Animal.prototype.oink = function() {
  if (this.kind === 'Pig') {
    return 'Oink!';
  } else {
    return 'I\'m not a pig';
  }
};

Animal.prototype.growUp = function() {
  return this.age += 1;
};

Animal.prototype.feed = function() {
  if (this.awake === true) {
    return 'NOM NOM NOM';
  }
};

Animal.prototype.wakeUp = function() {
  if (this.awake === false) {
    this.awake = true;
    return this.awake;
  }
};

Animal.prototype.sleep = function() {
  if (this.awake === true) {
    this.awake = false;
    return this.awake;
  }
};

module.exports = Animal;
