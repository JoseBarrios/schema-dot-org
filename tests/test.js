'use strict'

var assert = require('assert');
var schema = require('../index.js');



describe('SchemaORG Class\n', function() {

  describe('Methods:', function() {

		describe('#isValid', function() {

			it('url', function() {
				let valid = 'https://www.google.com';
				assert.equal(schema.isValid(valid, schema.url), true);
				valid = 'http://35.182.10.112/';
				assert.equal(schema.isValid(valid, schema.url), true);
				valid = 'mailto:some@email.com';
				assert.equal(schema.isValid(valid, schema.url), true);
				//Negative tests
				let invalid = 'text';
				assert.equal(schema.isValid(invalid, schema.url, false), false);
				invalid = 1;
				assert.equal(schema.isValid(invalid, schema.url, false), false);
				invalid = true;
				assert.equal(schema.isValid(invalid, schema.url, false), false);
				assert.equal(schema.isValid(invalid, schema.url, false), false);
				invalid = [];
				assert.equal(schema.isValid(invalid, schema.url, false), false);
				invalid = {};
				assert.equal(schema.isValid(invalid, schema.url, false), false);
			});



			it('text', function() {
				let valid = 'Some text';
				assert.equal(schema.isValid(valid, schema.text), true);
				//Negative tests
				let invalid = 1;
				assert.equal(schema.isValid(invalid, schema.text, false), false);
				invalid = true;
				assert.equal(schema.isValid(invalid, schema.text, false), false);
				assert.equal(schema.isValid(invalid, schema.text, false), false);
				invalid = [];
				assert.equal(schema.isValid(invalid, schema.text, false), false);
				invalid = {};
				assert.equal(schema.isValid(invalid, schema.text, false), false);
			});

			it('number', function() {
				let valid = 1;
				assert.equal(schema.isValid(valid, schema.number), true);
				valid = 1.0;
				assert.equal(schema.isValid(valid, schema.number), true);
				valid = -2.13;
				assert.equal(schema.isValid(valid, schema.number), true);
				//Negative tests
				let invalid = '1';
				assert.equal(schema.isValid(invalid, schema.number, false), false);
				invalid = true;
				assert.equal(schema.isValid(invalid, schema.number, false), false);
				assert.equal(schema.isValid(invalid, schema.number, false), false);
				invalid = [];
				assert.equal(schema.isValid(invalid, schema.number, false), false);
				invalid = {};
				assert.equal(schema.isValid(invalid, schema.number, false), false);
			});

			it('integer', function() {
				let data = 2;
				assert.equal(schema.isValid(data, schema.integer), true);
				data = 0;
				assert.equal(schema.isValid(data, schema.integer), true);
				data = 1.2;
				assert.equal(schema.isValid(data, schema.integer), false);
			});

			it('time', function() {
				let data = '13:30:00';
				assert.equal(schema.isValid(data, schema.time), true);
				data = Date.now();
				assert.equal(schema.isValid(data, schema.time), false);
			});

			it('dateTime', function() {
				let data = '13:30:00';
				assert.equal(schema.isValid(data, schema.dateTime), false);
				data = '2011-10-05T14:48:00Z';
				assert.equal(schema.isValid(data, schema.dateTime), true);
			});

			it('duration', function() {
				let data = '13:30:00';
				assert.equal(schema.isValid(data, schema.duration), false);
				data = 'P3Y6M4DT12H30M5S';
				assert.equal(schema.isValid(data, schema.duration), true);
			});


			it('boolean', function() {
				let valid = true;
				assert.equal(schema.isValid(valid, schema.boolean), true);
				valid = false;
				assert.equal(schema.isValid(valid, schema.boolean), true);
				//Negative tests
				let invalid = '1';
				assert.equal(schema.isValid(invalid, schema.boolean, false), false);
				invalid = [];
				assert.equal(schema.isValid(invalid, schema.boolean, false), false);
				invalid = {};
				assert.equal(schema.isValid(invalid, schema.boolean, false), false);
			});

			it('structuredValue', function() {
				assert.equal(schema.isValid({}, schema.structuredValue), true);
				assert.equal(schema.isValid(undefined, schema.structuredValue, false), false);
				assert.equal(schema.isValid(null, schema.structuredValue, false), false);
				assert.equal(schema.isValid([], schema.structuredValue, false), false);
			});

			it('class', function() {
				let data = {};
				data.category = "Mamal";
				data.supersededBy = {};
				data.supersededBy.category = "Animal";
				assert.equal(schema.isValid(data, schema.class), true);
			});

			it('property', function() {
				let data = {};
				data.category = "Mamal";
				data.domainIncludes = {};
				data.domainIncludes.category = "Mamal";
				data.domainIncludes.supersededBy = {};
				data.domainIncludes.supersededBy.category = "Animal";
				data.rangeIncludes = {};
				data.rangeIncludes.category = "Mamal";
				data.rangeIncludes.supersededBy = {};
				data.rangeIncludes.supersededBy.category = "Animal";
				data.supersededBy = {};
				data.supersededBy.category = "Mamal";
				data.supersededBy.supersededBy = {};
				data.supersededBy.supersededBy.category = "Animal";
				data.inverseOf = JSON.parse(JSON.stringify(data));
				assert.equal(schema.isValid(data, schema.property), true);
			});

			it('enumeration', function() {
				let data = {};
				data.supersededBy = {};
				data.supersededBy.category = "Mamal";
				data.supersededBy.supersededBy = {};
				data.supersededBy.supersededBy.category = "Animal";
				assert.equal(schema.isValid(data, schema.enumeration), true);
			});

			it('qualitativeValue', function() {
				let data = {};
				data.additionalProperty = {};
				data.additionalProperty.maxValue = 3;
				data.additionalProperty.value = 1;
				data.equal = {};
				data.equal.valueReference = {};
				data.equal.valueReference.value = 'One';
				data.valueReference = {};
				data.valueReference.value = 'Uno';
				assert.equal(schema.isValid(data, schema.qualitativeValue), true);
			});

			it('quantitativeValue', function() {
				let data = {};
				data.maxValue = 10;
				data.minValue = 0;
				data.value = true;
				data.unitCode = 'XXX';
				assert.equal(schema.isValid(data, schema.quantitativeValue), true);
			});

			it('propertyValue', function() {
				let data = {};
				data.maxValue = 10;
				data.minValue = 0;
				data.value = true;
				data.unitCode = 'XXX';
				assert.equal(schema.isValid(data, schema.propertyValue), true);
			});


			it('person', function() {
				let data = {};
				assert.equal(schema.isValid(data, schema.person), true);
			});

			it('creativework', function() {
				let data = {};
				assert.equal(schema.isValid(data, schema.creativeWork), true);
			});




			it('thing', function() {
				let valid = {};
				valid.additionalType = "http://google.com";
				assert.equal(schema.isValid(valid, schema.thing), true);
				valid.alternateName = "alternateName";
				assert.equal(schema.isValid(valid, schema.thing), true);
				valid.description = "description";
				assert.equal(schema.isValiisValid(valid, schema.thing), true);
				valid.disambiguatingDescription = "disambiguatingDescription";
				assert.equal(schema.isValid(valid, schema.thing), true);
				valid.identifier = "identifier";
				assert.equal(schema.isValid(valid, schema.thing), true);
				valid.image = "http://google.com/someimage.png";
				assert.equal(schema.isValid(valid, schema.thing), true);
				//Negative tests
				let invalid = {};
				invalid.image = 1;
				assert.equal(schema.isValid(invalid, schema.thing, false), false);
			});

    });
  });

});
