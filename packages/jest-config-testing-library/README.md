# jest-config-testing-library

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/jest-config-testing-library
[npm-image]:https://img.shields.io/npm/v/@moxy/jest-config-testing-library.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/jest-config-testing-library.svg
[david-dm-url]:https://david-dm.org/moxystudio/jest-config?path=packages/jest-config-testing-library
[david-dm-image]:https://img.shields.io/david/moxystudio/jest-config.svg?path=packages/jest-config-testing-library
[david-dm-dev-url]:https://david-dm.org/moxystudio/jest-config?type=dev&path=packages/jest-config-testing-library
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/jest-config.svg?path=packages/jest-config-testing-library

MOXY's [Jest](https://jestjs.io/) configuration **enhancer** for:
- Web projects that use [React Testing Library (RTL)](https://github.com/testing-library/react-testing-library) framework.
- React Native apps that use [Native Testing Library (NTL)](https://github.com/testing-library/native-testing-library) framework.

## Installation

```sh
$ npm install --save-dev jest @moxy/jest-config-base @moxy/jest-config-testing-library
```

This package should be used in conjunction with `@moxy/jest-config-base`. There are two enhancers available:

- [withRTL](#withrtl)
- [withNTL](#withntl)

# withRTL

An enhancer for web projects tested with React Testing Library.

## What's included?

- **Extended matchers:** Make assertions easier and clearer by using [jest-dom](https://github.com/testing-library/jest-dom).

## Usage

To use this enhancer, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration!

```js
'use strict';

const { compose, baseConfig } = require('@moxy/jest-config-base');
const { withRTL } = require('@moxy/jest-config-testing-library');

module.exports = compose(
    baseConfig(),
    withRTL(),
);
```

⚠️ Make sure `withRTL` is composed only after `withWeb` from `@moxy/jest-config-web`.

# withNTL

An enhancer for React Native apps tested with Native Testing Library.

## What's included?

- **Extended matchers:** Make assertions easier and clearer by using [jest-native](https://github.com/testing-library/jest-native).

## Usage

To use this enhancer, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration!

```js
'use strict';

const { compose, baseConfig } = require('@moxy/jest-config-base');
const { withNTL } = require('@moxy/jest-config-testing-library');

module.exports = compose(
    baseConfig('node'),
    withNTL(),
);
```

⚠️ Make sure `withNTL` is composed only after `withReactNative` from `@moxy/jest-config-react-native`.
