# Migration guide

The previous package that existed in this repository, `@moxy/jest-config`, has been deprecated. To learn how to migrate into the new configuration structure, read below.

## Migrating from <= 4.2.1

Until v4.2.1, you would have to import `@moxy/jest-config` to apply the **base** configuration and the **enhancers** you wished to use (`withWeb`, `withReactNative`, `withRTL`, ...).

Your `jest.config.js` would look similar to this:

```js
const { compose, baseConfig, withWeb, withRTL } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig(),
    withWeb(),
    withRTL(),
);
```

Now, the package has been refactored into a **base** configuration package and several **enhancer** packages (more info on what packages exist and how to use them is in this repository's [README](README.md)). Enhancer APIs were not subject to any breaking changes during this process.

For example, the example given above would look like this after migrating to the newest version:

```js
const { compose, baseConfig } = require('@moxy/jest-config');
const withWeb = require('@moxy/jest-config-web');
const { withRTL } = require('@moxy/jest-config-testing-library');

module.exports = compose(
    baseConfig(),
    withWeb(),
    withRTL(),
);
```

## New features

In addition to the previously existing `withRTL` enhancer, `@moxy/jest-config-testing-library` now offers a `withNTL` enhancer for React Native apps that use [Native Testing Library (NTL)](https://github.com/testing-library/native-testing-library) framework for testing.
