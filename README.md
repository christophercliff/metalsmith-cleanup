# metalsmith-cleanup

[![Build Status](https://travis-ci.org/christophercliff/metalsmith-cleanup.png?branch=master)](https://travis-ci.org/christophercliff/metalsmith-cleanup)

A [Metalsmith][metalsmith] plugin to empty the build directory

## Installation

```
npm install metalsmith-cleanup
```

## Usage

```js
var cleanup = require('metalsmith-cleanup')

Metalsmith(__dirname)
  .use(cleanup())
  .build()
```

## Tests

```
$ npm test
```

## License

MIT License, see [LICENSE](https://github.com/christophercliff/metalsmith-cleanup/blob/master/LICENSE.md) for details.

[metalsmith]: http://www.metalsmith.io/
