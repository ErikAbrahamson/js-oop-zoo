var Animal = require('../src/animal.js');
var animal;

describe('Animal', function(){

  beforeEach(function(){
    animal = new Animal("Fido", 27, "Pig");
  });

  describe('#oink', function(){
    it('should oink if it is a pig', function(){
      expect(animal.oink()).toEqual('Oink!');
    });
    it('should not oink if it is not pig', function(){
      animal.kind = 'lion';
      expect(animal.oink()).toEqual('I\'m not a pig');
    });
  });

  describe('#growUp', function(){
    it('should increment the age by one', function(){
      expect(animal.growUp()).toEqual(28);
    });
  });

  describe('#awake', function(){
    it('should initially be off', function(){
      // add spec
    });
  });

   describe('#wakeUp', function(){
    it('should change state to awake', function(){
      expect(animal.wakeUp()).toBe(true);
    });
  });

  describe('#sleep', function(){
    it('should initially be sleeping', function(){
      expect(animal.sleep()).not.toBeTruthy();
    });
  });

  describe('#feed', function(){
    it('should get fed if awake', function(){
      animal.awake = true;
      expect(animal.feed()).toEqual('NOM NOM NOM');
    });
    it('not should get fed if sleeping', function(){
      expect(animal.feed()).toBe(undefined);
    });
  });

});
