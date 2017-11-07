# schema-dot-org
A collection of schema.org compliant JSON schemas


### Use
```js

const schema = require('schema-dot-org');

let example = {};
example.url = "http://google.com";

let isValid = schema.validate(example, schema.thing);//true

```
### Test
```bash
$ npm test
```

### Schema support
- Thing (incomplete)
- Text
- URL
- Date
