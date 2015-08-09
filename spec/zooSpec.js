var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      expect(zoo.changeLocation('x')).toEqual('x');
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      expect(zoo.openZoo()).toBe('open');
    });
  });

  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      expect(zoo.isOpen()).not.toBe('Open!');
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toBe('Closed.');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals.length).toBe(0);
    });
  });

  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      expect(zoo.status).toEqual('closed');
    });
    it('should add an animal to the animals array', function(){
      zoo.status = 'open';
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toBe(1);
    });

    it('should only add instances of animals', function(){
      zoo.status = 'open';
      expect(zoo.addAnimal(pig)).toEqual(1);
    });

    it('should not add duplicates', function(){
      zoo.status = 'open';
      zoo.addAnimal(pig);
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toBe(1);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      // add spec
    });
  });
});


