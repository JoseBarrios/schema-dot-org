'use strict'

var assert = require('assert');
var schema = require('../index.js');



describe('SchemaORG Class\n', function() {

  describe('Methods:', function() {

		describe('#validate', function() {

			it('thing: should return true with valid object', function() {
				let validThing = {};
				validThing.additionalType = "http://google.com";
				assert.equal(schema.validate(schema.thing, validThing), true);
				validThing.alternateName = "alternateName";
				assert.equal(schema.validate(schema.thing, validThing), true);
				validThing.description = "description";
				assert.equal(schema.validate(schema.thing, validThing), true);
				validThing.disambiguatingDescription = "disambiguatingDescription";
				assert.equal(schema.validate(schema.thing, validThing), true);
				validThing.identifier = "identifier";
				assert.equal(schema.validate(schema.thing, validThing), true);
				validThing.image = "http://google.com/someimage.png";
				assert.equal(schema.validate(schema.thing, validThing), true);
			});

			it('thing: should return false with invalid object', function() {
				let invalidThing = {};
				invalidThing.image = 1;
				assert.equal(schema.validate(schema.thing, invalidThing, false), false);
			});

    });
  });

});
