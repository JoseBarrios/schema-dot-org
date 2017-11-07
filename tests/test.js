'use strict'

var assert = require('assert');
var schema = require('../index.js');



describe('SchemaORG Class\n', function() {

  describe('Methods:', function() {

		describe('#validate', function() {

			it('text', function() {
				let valid = 'Some text';
				assert.equal(schema.validate(valid, schema.text), true);
				//Negative tests
				let invalid = 1;
				assert.equal(schema.validate(invalid, schema.text, false), false);
				invalid = true;
				assert.equal(schema.validate(invalid, schema.text, false), false);
				assert.equal(schema.validate(invalid, schema.text, false), false);
				invalid = [];
				assert.equal(schema.validate(invalid, schema.text, false), false);
				invalid = {};
				assert.equal(schema.validate(invalid, schema.text, false), false);
			});



			it('thing', function() {
				let valid = {};
				valid.additionalType = "http://google.com";
				assert.equal(schema.validate(valid, schema.thing), true);
				valid.alternateName = "alternateName";
				assert.equal(schema.validate(valid, schema.thing), true);
				valid.description = "description";
				assert.equal(schema.validate(valid, schema.thing), true);
				valid.disambiguatingDescription = "disambiguatingDescription";
				assert.equal(schema.validate(valid, schema.thing), true);
				valid.identifier = "identifier";
				assert.equal(schema.validate(valid, schema.thing), true);
				valid.image = "http://google.com/someimage.png";
				assert.equal(schema.validate(valid, schema.thing), true);
				//Negative tests
				let invalid = {};
				invalid.image = 1;
				assert.equal(schema.validate(invalid, schema.thing, false), false);
			});

    });
  });

});
