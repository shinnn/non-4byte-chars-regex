# non-4byte-chars-regex

[![NPM version](https://img.shields.io/npm/v/non-4byte-chars-regex.svg)](https://www.npmjs.com/package/non-4byte-chars-regex)
[![Bower version](https://img.shields.io/bower/v/non-4byte-chars-regex.svg)](https://github.com/shinnn/non-4byte-chars-regex/releases)
[![Build Status](https://travis-ci.org/shinnn/non-4byte-chars-regex.svg?branch=master)](https://travis-ci.org/shinnn/non-4byte-chars-regex)
[![devDependencies Status](https://david-dm.org/shinnn/non-4byte-chars-regex/dev-status.svg)](https://david-dm.org/shinnn/non-4byte-chars-regex?type=dev)

[Regular expression](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) which matches a string with no [4-byte characters](https://github.com/shinnn/is-4byte-char/)

```javascript
/^(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*$/
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install non-4byte-chars-regex
```

### [bower](https://bower.io/)

```
bower install non-4byte-chars-regex
```

## API

### non4byteCharsRegex

Type: `RegExp`

```javascript
import non4byteCharsRegex from 'non-4byte-chars-regex';

non4byteCharsRegex.test('foo'); //=> true
non4byteCharsRegex.test('bar🍣baz'); //=> false

non4byteCharsRegex.test('吉'); //=> true
non4byteCharsRegex.test('𠮷'); //=> false
```

## License

[The Unlicense](./LICENSE)
