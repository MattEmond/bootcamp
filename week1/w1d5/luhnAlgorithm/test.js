var assert = require('assert');
var check = require('./algorithm').check


describe('check', function() {
  it('should return 16 when the input value is 4', function() {
    assert.equal(16, check(4));
  });
});