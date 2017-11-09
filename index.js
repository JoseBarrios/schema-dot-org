//Where all the individual schemas are stored
const schemas = require('./schemas.js');
const AJV = require('ajv');
const ajv = new AJV();

class SchemaORG {

	constructor(){

	}

	//return a *copy* of the schemas object, not the original object itself
	//this allows us to remove circular references when validating schemas
	get schemas(){ return schemas; }


	get action(){
		let action = this.schemas.action;
		action.definitions = this.schemas.definitions;
		return action;
	}

	get text(){ return this.schemas.text; }
	get number(){ return this.schemas.number; }
	get boolean(){ return this.schemas.boolean; }
	get url(){ return this.schemas.url; }
	get structuredValue(){ return this.schemas.structuredValue; }

	get class(){
		let schema = this.schemas.class;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get property(){
		let schema = this.schemas.property;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get enumeration(){
		let schema = this.schemas.enumeration;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get quantitativeValue(){
		let schema = this.schemas.quantitativeValue;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get qualitativeValue(){
		let schema = this.schemas.qualitativeValue;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get propertyValue(){
		let schema = this.schemas.propertyValue;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get thing(){
		let schema = this.schemas.thing;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get person(){
		let schema = this.schemas.person;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get creativeWork(){
		let schema = this.schemas.creativeWork;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get brand(){
		let schema = this.schemas.brand;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get review(){
		let schema = this.schemas.review;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get contactPoint(){
		let schema = this.schemas.contactPoint;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get administrativeArea(){
		let schema = this.schemas.administrativeArea;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get geoCoordinates(){
		let schema = this.schemas.geoCoordinates;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get postalAddress(){
		let schema = this.schemas.postalAddress;
		schema.definitions = this.schemas.definitions;
		return schema;
	}


	get country(){
		let schema = this.schemas.country;
		schema.definitions = this.schemas.definitions;
		return schema;
	}


	get geoShape(){
		let schema = this.schemas.geoShape;
		schema.definitions = this.schemas.definitions;
		return schema;
	}


	get map(){
		let schema = this.schemas.map;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get openingHoursSpecification(){
		let schema = this.schemas.openingHoursSpecification;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get time(){
		let schema = this.schemas.time;
		schema.definitions = this.schemas.definitions;
		return schema;
	}



	get xxx(){
		let schema = this.schemas.xxx;
		schema.definitions = this.schemas.definitions;
		return schema;
	}

	get integer(){
		let schema = this.schemas.integer;
		schema.definitions = this.schemas.definitions;
		return schema;
	}




	validate(data, schema, logging=false){
		let valid = ajv.validate(schema, data);
		if (logging){
			console.error(schema.title, ajv.errorsText());
		}
		return valid;
	}
}

module.exports = new SchemaORG();
