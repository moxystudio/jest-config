# jest-config

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/jest-config
[downloads-image]:https://img.shields.io/npm/dm/@moxy/jest-config.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/jest-config.svg
[travis-url]:https://travis-ci.org/moxystudio/jest-config
[travis-image]:https://img.shields.io/travis/moxystudio/jest-config/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/jest-config
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/jest-config/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/jest-config
[david-dm-image]:https://img.shields.io/david/moxystudio/jest-config.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/jest-config?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/jest-config.svg

MOXY's Jest configuration to be used across several JavaScript projects.

## Installation

```sh
$ npm install --save-dev @moxy/jest-config
```

## How it works

This package contains a **base** configuration and a set of **enhancers**. You may combine them to configure Jest for different types of projects.

### Base config

`baseConfig` is the base point of this configuration. It includes all defaults offered by [`jest-config`](https://jestjs.io/docs/en/configuration#defaults), and has project agnostic configurations, meant to help any project regardless of their purpose, including:

- **Test match**: Tweaks `testMatch` so that only files named `test.js` or files ending with `.test.js` are considered test files, even if they are inside `__tests__` or any other folder.
- **Test path ignore patterns**: Tweaks `testPathIgnorePatterns` to ignore common folders, such as `docusaurus`.
- **Transform**: Enables Babel so that [`jest.mock()`](https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options) and similar functions are automatically hoisted to the top. If your project uses Babel, its config will be read and used to transpile code.
- **Coverage**: Enables coverage for CI, a feature supported by [`ci-info`](https://github.com/watson/ci-info), which you can check for information about supported CI services.
- **Coverage thresholds**: For a good balance between strict but workable thresholds.
- **Snapshot serializing**: To remove absolute paths from your snapshots, reducing conflicts in CI.

### Enhancers

There are several **enhancer** packages, which are intended to be used in conjunction with the **base** configuration:

- [`withWeb`](lib/enhancers/web/) - Adds setup for Web projects.
- [`withReactNative`](lib/enhancers/react-native/) - Adds setup for [React Native](https://reactnative.dev/) projects.
- [`withRTL`](lib/enhancers/testing-library/#withrtl) - Adds setup for projects using [Testing Library](https://testing-library.com).
- [`withEnzymeWeb`](lib/enhancers/enzyme/#withenzymeweb) & [`withEnzymeReactNative`](lib/enhancers/enzyme/#withenzymereactnative) - Adds setup for projects using [Enzyme](https://github.com/airbnb/enzyme).

## Usage

Create `jest.config.js` at the root of your project:

```js
const { baseConfig } = require('@moxy/jest-config');

module.exports = baseConfig();
```

The `baseConfig` function accepts a optional parameter that allows to specify the Jest environment, which can be `jsdom` (default) or `node`. As an example, for Node.js projects you would use like so:

```js
const { baseConfig } = require('@moxy/jest-config');

module.exports = baseConfig('node');
```

### Composing enhancers

To use enhancers, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration! Here's an example of using `compose`:

```js
const { compose, baseConfig, withWeb, withRTL } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig(),
    withWeb(),
    withRTL(),
);
```

You may also use `compose` to add your own inline enhancer:

```js
const { compose, baseConfig } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig(),
    (config) => ({
        ...config,
        // Do not test `.data.js` files
        testPathIgnorePatterns: [
            ...config.pathIgnorePatterns,
            '/.*.data.js$/'
        ];
    }),
);
```

### Without compose

If you want to modify the base config without using `compose`, you may change the config imperatively like so:

```js
const { baseConfig } = require('@moxy/jest-config');

const config = baseConfig();

// Do not test `.data.js` files
config.testPathIgnorePatterns = [
    ...config.testPathIgnorePatterns,
    '/.*.data.js$/'
];

module.exports = config;
```

## Tests

Any parameter passed to the `test` command is passed down to Jest.

```sh
$ npm t
$ npm t -- --watch  # To run watch mode
```

## License

Released under the [MIT License](https://opensource.org/licenses/mit-license.php).
