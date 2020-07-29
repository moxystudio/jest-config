# jest-config-react-native

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/jest-config-react-native
[npm-image]:https://img.shields.io/npm/v/@moxy/jest-config-react-native.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/jest-config-react-native.svg
[david-dm-url]:https://david-dm.org/moxystudio/jest-config?path=packages/jest-config-react-native
[david-dm-image]:https://img.shields.io/david/moxystudio/jest-config.svg?path=packages/jest-config-react-native
[david-dm-dev-url]:https://david-dm.org/moxystudio/jest-config?type=dev&path=packages/jest-config-react-native
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/jest-config.svg?path=packages/jest-config-react-native

MOXY's [Jest](https://jestjs.io/) configuration **enhancer** for React Native apps.

⚠️ This enhancer requires you to have [`react-native`](https://www.npmjs.com/package/react-native) installed in your project.

## Installation

```sh
$ npm install --save-dev jest @moxy/jest-config-base @moxy/jest-config-react-native
```

This package should be used in conjunction with `@moxy/jest-config-base`.

## What's included?

- **React Native Jest preset:** Adds [`react-native/jest-preset`](https://github.com/facebook/react-native/blob/master/jest-preset.js) to configure the environment.
- **Transform**: Allows importing common files used in React Native projects, such as fonts, images and videos.
- **React Native mocks**: Supress warnings and errors when trying to access native functionality.

## Usage

To use this enhancer, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration!

```js
'use strict';

const { compose, baseConfig } = require('@moxy/jest-config-base');
const withReactNative = require('@moxy/jest-config-react-native');

module.exports = compose(
    baseConfig('node'),
    withReactNative(),
);
```

The enhancer accepts an options object as the first argument with the following keys:

- `transformModules`: A function that allows you to add (or remove) modules to be transformed by Babel. It has the following signature `(patterns) => newPatterns`, where the default `patterns` are `['(jest-)?react-native(-.*)?/', '@react-native-community/']`.

To showcase the usefulness of `transformModules`, let's pretend that you use [React Navigation](https://reactnavigation.org/) in your project. You would need to compile its packages to make them work in Jest, so you would add them to `transformModules` like so:

```js
'use strict';

const { compose, baseConfig } = require('@moxy/jest-config');
const withReactNative = require('@moxy/jest-config-react-native');

module.exports = compose(
    baseConfig('node'),
    withReactNative({
        transformModules: (patterns) => [...patterns, '@react-navigation/'],
    }),
);
```
