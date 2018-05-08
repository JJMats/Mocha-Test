const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', ()=> {
  describe('.announceDawn', ()=> {
    it('returns a rooster call', ()=> {
      // Setup
      const expected = 'cock-a-doodle-doo!';
      
      // Exercise
      const result = Rooster.announceDawn();
      
      // Verify
      assert.equal(result, expected);
    });    
  });
  
  describe('.timeAtDawn', ()=> {
    it('returns its argument as a string', ()=> {
    	// Setup
      const expected = '6';
      
      // Exercise
      const result = Rooster.timeAtDawn(6);
      
      // Verify
      assert.strictEqual(result, expected);
    });
    
    it('throws an error if passed a number less than 0', ()=> {      
      assert.throws(
      	() => {
        	Rooster.timeAtDawn(-1);
      	},
      		RangeError
      );
    });
    
    it('throws an error if passed a number greater than 23', ()=> {      
      assert.throws(
      	() => {
        	Rooster.timeAtDawn(24);
      	},
      		RangeError
      );
    });
  })
});