const schemas = {};

schemas.actionStatusType = require('./schema/action-status-type.json')
schemas.action = require('./schema/action.json')
schemas.aggregateRating = require('./schema/aggregate-rating.json')
schemas.boolean = require('./schema/boolean.json')
schemas.brand = require('./schema/brand.json')
schemas.class = require('./schema/class.json')
schemas.creativeWork = require('./schema/creative-work.json')
schemas.educationalOrganization = require('./schema/educational-organization.json')
schemas.date = require('./schema/date.json')
schemas.entryPoint = require('./schema/entry-point.json')
schemas.enumeration = require('./schema/enumeration.json')
schemas.event = require("./schema/event.json");
schemas.imageObject = require('./schema/image-object.json')
schemas.locationFeatureSpecification = require('./schema/location-feature-specification.json')
schemas.number = require('./schema/number.json')
schemas.organization = require('./schema/organization.json')
schemas.person = require('./schema/person.json')
schemas.place = require('./schema/place.json')
schemas.postalAddress = require('./schema/postal-address.json')
schemas.propertyValue = require('./schema/property-value.json')
schemas.property = require('./schema/property.json')
schemas.qualitativeValue = require('./schema/qualitative-value.json')
schemas.quantitativeValue = require('./schema/quantitative-value.json')
schemas.structuredValue = require('./schema/structured-value.json')
schemas.text = require("./schema/text.json");
schemas.thing = require('./schema/thing.json')
schemas.url = require("./schema/url.json");


const definitions = JSON.parse(JSON.stringify(schemas))
schemas.definitions = definitions;

module.exports = schemas;
