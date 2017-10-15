'use strict'

var assert = require('assert');
var schema = require('../index.js');

let validThing = {
	"additionalType": "http://google.com",
	"alternateName": "alias",
	"description": "This is a description",
	"disambiguatingDescription": "des description",
	"identifier": "hello",
}

let invalidThing = {
	"image": 1,
}



describe('SchemaORG Class\n', function() {

  describe('Methods:', function() {
   describe('#validate', function() {
       it('thing: should return true with valid object', function() {
         assert.equal(schema.validate(schema.thing, validThing), true);
      });
		 it('thing: should return false with invalid object', function() {
         assert.equal(schema.validate(schema.thing, invalidThing, false), false);
      });
    });
  });

});
