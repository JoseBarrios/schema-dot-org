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
