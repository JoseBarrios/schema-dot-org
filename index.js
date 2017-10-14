//Where all the individual schemas are stored
const definitions = require('./definitions.js');

//const AJV = require('ajv');
//const ajv = new AJV();


class SchemaORG {

	//TODO
	constructor(){

	}

	//TODO: Pending on ES6 support
	//Static properties should be added when they are supported by the ES6 spec.
	//For now, we can work around it by adding a static getter. This approach is
	//subpar, since the getter returns a new instance every time, which is not
	//ideal for large-scale applications
	static get Action(){ return definitions.action; }

}



//TESTS
let action = SchemaORG.Action;
console.log(action)
//console.log(SchemaORG)



module.exports = SchemaORG;
