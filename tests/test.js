'use strict'

var assert = require('assert');
var schema = require('../index.js');



describe('SchemaORG Class\n', function() {

  describe('Methods:', function() {

		describe('#validate', function() {

			it('url', function() {
				let valid = 'https://www.google.com';
				assert.equal(schema.validate(valid, schema.url), true);
				valid = 'http://35.182.10.112/';
				assert.equal(schema.validate(valid, schema.url), true);
				valid = 'mailto:some@email.com';
				assert.equal(schema.validate(valid, schema.url), true);
				//Negative tests
				let invalid = 'text';
				assert.equal(schema.validate(invalid, schema.url, false), false);
				invalid = 1;
				assert.equal(schema.validate(invalid, schema.url, false), false);
				invalid = true;
				assert.equal(schema.validate(invalid, schema.url, false), false);
				assert.equal(schema.validate(invalid, schema.url, false), false);
				invalid = [];
				assert.equal(schema.validate(invalid, schema.url, false), false);
				invalid = {};
				assert.equal(schema.validate(invalid, schema.url, false), false);
			});



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

			it('number', function() {
				let valid = 1;
				assert.equal(schema.validate(valid, schema.number), true);
				valid = 1.0;
				assert.equal(schema.validate(valid, schema.number), true);
				valid = -2.13;
				assert.equal(schema.validate(valid, schema.number), true);
				//Negative tests
				let invalid = '1';
				assert.equal(schema.validate(invalid, schema.number, false), false);
				invalid = true;
				assert.equal(schema.validate(invalid, schema.number, false), false);
				assert.equal(schema.validate(invalid, schema.number, false), false);
				invalid = [];
				assert.equal(schema.validate(invalid, schema.number, false), false);
				invalid = {};
				assert.equal(schema.validate(invalid, schema.number, false), false);
			});


			it('boolean', function() {
				let valid = true;
				assert.equal(schema.validate(valid, schema.boolean), true);
				valid = false;
				assert.equal(schema.validate(valid, schema.boolean), true);
				//Negative tests
				let invalid = '1';
				assert.equal(schema.validate(invalid, schema.boolean, false), false);
				invalid = [];
				assert.equal(schema.validate(invalid, schema.boolean, false), false);
				invalid = {};
				assert.equal(schema.validate(invalid, schema.boolean, false), false);
			});

			it('structuredValue', function() {
				assert.equal(schema.validate({}, schema.structuredValue), true);
				assert.equal(schema.validate(undefined, schema.structuredValue, false), false);
				assert.equal(schema.validate(null, schema.structuredValue, false), false);
				assert.equal(schema.validate([], schema.structuredValue, false), false);
			});

			it('class', function() {
				let data = {};
				data.category = "Mamal";
				data.supersededBy = "Animal";
				assert.equal(schema.validate(data, schema.class), true);
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
