# schema-org
A collection of schema.org compliant JSON schemas

### Use
```js

const schema = require('schema-org');

let thing = {};
thing.url = "http://google.com";

let isValid = schema.validate(schema.thing, thing);//true

```

### Schema support
- Thing (incomplete)
- Text
- URL