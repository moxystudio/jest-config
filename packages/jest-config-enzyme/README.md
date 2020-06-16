# jest-config-enzyme

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/jest-config-enzyme
[npm-image]:https://img.shields.io/npm/v/@moxy/jest-config-enzyme.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/jest-config-enzyme.svg
[david-dm-url]:https://david-dm.org/moxystudio/jest-config?path=packages/jest-config-enzyme
[david-dm-image]:https://img.shields.io/david/moxystudio/jest-config.svg?path=packages/jest-config-enzyme
[david-dm-dev-url]:https://david-dm.org/moxystudio/jest-config?type=dev&path=packages/jest-config-enzyme
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/jest-config.svg?path=packages/jest-config-enzyme

MOXY's [Jest](https://jestjs.io/) configuration **enhancer** for web projects that use [Enzyme](https://github.com/airbnb/enzyme) framework.

## Installation

```sh
$ npm install --save-dev jest @moxy/jest-config-base @moxy/jest-config-enzyme
```

This package should be used in conjunction with `@moxy/jest-config-base`. There are two enhancers available:

- [withEnzymeWeb](#withenzymeweb)
- [withEnzymeReactNative](#withenzymereactnative)

# withEnzymeWeb

An enhancer for web projects tested with Enzyme.

## What's included?

- **Automatic adapter setup**: Setups the enzyme adapter automatically based on the desired one.
- **Wrapper snapshotting**: Ability to snapshot Enzyme wrappers by using [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json).
- **Extended matchers**: Make assertions easier and clearer by using `jest-enzyme` [matchers](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#assertions).

## Usage

To use this enhancer, use the `compose` function that comes with `@moxy/jest-config-base`. **Keep in mind**, the first item should always be the base configuration!

```js
const { compose, baseConfig } = require('@moxy/jest-config-base');
const { withEnzymeWeb } = require('@moxy/jest-config-enzyme');

module.exports = compose(
    baseConfig(),
    withEnzymeWeb('enzyme-adapter-react-16'),
);
```

⚠️ Note that you **must install** the Enzyme adapter yourself. In the example above, you would have to install `enzyme-adapter-react-16`:

⚠️ Make sure `withEnzymeWeb` is composed only after `withWeb` from `@moxy/jest-config-web`.

```sh
$ npm install --save-dev enzyme-adapter-react-16
```

# withEnzymeReactNative

An enhancer for React Native projects tested with [Enzyme](https://github.com/airbnb/enzyme).

## What's included?

- **Automatic adapter setup**: Setups the enzyme adapter automatically based on the desired one.
- **Wrapper snapshotting**: Ability to snapshot Enzyme wrappers by using [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json).
- **Ignore certain warnings and errors**: [Ignore warnings and errors](https://github.com/enzymejs/enzyme/issues/831) produced by React due to the fact that we are using JSDOM in React Native, as [prescribed](https://enzymejs.github.io/enzyme/docs/guides/react-native.html) by Enzyme.
- **Extended matchers**: Make assertions easier and clearer by using `jest-enzyme` [matchers](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#assertions). Only React Native-compatible matchers are installed:
    - `toBeDisabled()`
    - `toBeEmptyRender()`
    - `toExist()`
    - `toContainMatchingElement()`
    - `toContainMatchingElements()`
    - `toContainExactlyOneMatchingElement()`
    - `toContainReact()`
    - `toHaveDisplayName()`
    - `toHaveProp()`
    - `toHaveRef()`
    - `toHaveState()`
    - `toIncludeText()`
    - `toMatchElement()`
    - `toMatchSelector()`

## Usage

To use this enhancer, use the `compose` function that comes with `@moxy/jest-config-base`. **Keep in mind**, the first item should always be the base configuration!

```js
const { compose, baseConfig } = require('@moxy/jest-config-base');
const { withEnzymeReactNative } = require('@moxy/jest-config-enzyme');

module.exports = compose(
    baseConfig(),
    withEnzymeReactNative('enzyme-adapter-react-16', options),
);
```

⚠️ Note that you **must install** the Enzyme adapter yourself. In the example above, you would have to install `enzyme-adapter-react-16`:

⚠️ Make sure `withEnzymeReactNative` is composed only after `withReactNative` from `@moxy/jest-config-react-native`.

### options

#### ignoreExtraMessagePatterns

Type: `Array`  
Default: `[]`

An array of regexp pattern strings that are matched against errors or warnings emitted by React and filtered out. There are several messages which already ignored by default. This option allows to exclude additional messages if necessary.

```sh
$ npm install --save-dev enzyme-adapter-react-16
```

