# jest-preset

MOXY's Jest configuration to be used across several JavaScript projects.

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/jest-preset
[downloads-image]:https://img.shields.io/npm/dm/@moxy/jest-preset.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/jest-preset.svg
[travis-url]:https://travis-ci.org/moxystudio/jest-preset
[travis-image]:http://img.shields.io/travis/moxystudio/jest-preset/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/jest-preset
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/jest-preset/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/jest-preset
[david-dm-image]:https://img.shields.io/david/moxystudio/jest-preset.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/jest-preset?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/jest-preset.svg


## Installation

```sh
$ npm install @moxy/jest-preset
```


## Usage

Create `jest.config.js` at the root of your project:

```js
module.exports = {
    preset: '@moxy/jest-preset',
};
```

You can override the preset options like so:

```js
module.exports = {
    preset: '@moxy/jest-preset',

    // Will override testPathIgnorePatterns in preset
    testPathIgnorePatterns: [
        '/ignore/',
    ],
};

```


## Tests

Any parameter passed to the `test` command is passed down to Jest.

```sh
$ npm t
$ npm t -- --watch  # To run watch mode
```


## License

Released under the [MIT License](https://opensource.org/licenses/mit-license.php).

