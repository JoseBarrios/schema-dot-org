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



	validate(data, schema, logging=false){
		let valid = ajv.validate(schema, data);
		if (logging){
			console.error(schema.title, ajv.errorsText());
		}
		return valid;
	}
}

module.exports = new SchemaORG();
