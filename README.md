# jest-config

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/jest-config
[downloads-image]:https://img.shields.io/npm/dm/@moxy/jest-config.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/jest-config.svg
[travis-url]:https://travis-ci.org/moxystudio/jest-config
[travis-image]:http://img.shields.io/travis/moxystudio/jest-config/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/jest-config
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/jest-config/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/jest-config
[david-dm-image]:https://img.shields.io/david/moxystudio/jest-config.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/jest-config?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/jest-config.svg

MOXY's Jest configuration to be used across several JavaScript projects.


## Installation

```sh
$ npm install @moxy/jest-config
```


## Usage

Create `jest.config.js` at the root of your project:

```js
module.exports = require('@moxy/jest-config')()
```

Options sent as an argument will safely spread into the option of this configuration. You can change or add your own Jest configuration options to the preset like so:

```js
module.exports = require('@moxy/jest-config')({
    /* options */
})
```


## API

This config also has some options that add default configurations for certain environments. The following table lists all options.

| Option | Description | Type | Default |
|  ---   |     ---     | ---  |   ---   |
| enzyme   | Adds setup file for `Enzyme` and `React 16.x` | boolean  | false |



## Tests

Any parameter passed to the `test` command is passed down to Jest.

```sh
$ npm t
$ npm t -- --watch  # To run watch mode
```


## License

Released under the [MIT License](https://opensource.org/licenses/mit-license.php).

