//Where all the individual schemas are stored
const schemas = require('./schemas.js');
const AJV = require('ajv');
const ajv = new AJV();

class SchemaORG {

	constructor(){

	}

	//return a *copy* of the schemas object, not the original object itself
	//this allows us to remove circular references when validating schemas
	get schemas(){ return JSON.parse(JSON.stringify(schemas)); }


	get action(){
		let action = this.schemas.action;
		action.definitions = this.schemas;
		return action;
	}

	get text(){ return this.schemas.text; }

	get thing(){
		let data = this.schemas.thing;
		//return data, including all definitions
		//eventually, we'll cherry pick only the relevant
		//definitions, instead of sending all definitions
		data.definitions = this.schemas;
		return data;
	}

	get url(){ return this.schemas.url; }


	validate(data, schema, printError=true){
		let valid = ajv.validate(schema, data);
		if (!valid && printError){ console.error(schema.title, ajv.errorsText()); }
		return valid;
	}
}

module.exports = new SchemaORG();
