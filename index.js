//Where all the individual schemas are stored
const definitions = require('./definitions.js');
const AJV = require('ajv');
const ajv = new AJV();

class SchemaORG {

	constructor(){

	}

	//return a copy of the definitions, not the definitions themselves
	//this allows us to remove unwanted properties (circular references)
	//when validating schemas
	get definitions(){ return JSON.parse(JSON.stringify(definitions)); }


	get action(){
		let action = this.definitions.action;
		action.definitions = this.definitions;
		//Eliminate cycle dependecy
		delete action.definitions.action;
		return action;
	}

	//No dependencies
	get text(){ return this.definitions.text; }

	//Depends on:
	get thing(){
		let thing = this.definitions.thing;
		thing.definitions = this.definitions;
		//Eliminate cycle dependecy
		delete thing.definitions.thing;
		return thing;
	}

	//No dependencies
	get url(){ return this.definitions.url; }



	validate(schemaType, data, printError=true){
		let valid = ajv.validate(schemaType, data);
		if (!valid && printError){ console.error(schemaType.title, ajv.errorsText()); }
		return valid;
	}
}

module.exports = new SchemaORG();
