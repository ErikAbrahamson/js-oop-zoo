console.log('Begin...');

function Animal(name,age,kind,awake) {
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function() {
  if (this.kind === 'pig') {
    return 'Oink!';
  }
};

Animal.prototype.growUp = function() {
  this.age += 1;
};

Animal.prototype.feed = function() {
  if (this.awake === true) {
    return 'NOM NOM NOM';
  }
};

Animal.prototype.wakeUp = function() {
  if (this.awake === false) {
    return true;
  }
};


