# jest-config-base

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/jest-config-base
[npm-image]:https://img.shields.io/npm/v/@moxy/jest-config-base.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/jest-config-base.svg
[david-dm-url]:https://david-dm.org/moxystudio/jest-config?path=packages/jest-config-base
[david-dm-image]:https://img.shields.io/david/moxystudio/jest-config.svg?path=packages/jest-config-base
[david-dm-dev-url]:https://david-dm.org/moxystudio/jest-config?type=dev&path=packages/jest-config-base
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/jest-config.svg?path=packages/jest-config-base

MOXY's [Jest](https://jestjs.io/) **base** configuration.

## Installation

```sh
$ npm install --save-dev jest @moxy/eslint-config-base
```

## How it works

`baseConfig` is the base point of this configuration. It includes all defaults offered by [`jest-config`](https://jestjs.io/docs/en/configuration#defaults) and has project-agnostic configurations, meant to help any project regardless of their purpose, including:

- **Test match**: Tweaks `testMatch` so that only files named `test.js` or files ending with `.test.js` are considered test files, even if they are inside `__tests__` or any other folder.
- **Test path ignore patterns**: Tweaks `testPathIgnorePatterns` to ignore common folders, such as `docusaurus`.
- **Transform**:
    - Enables Babel so that [`jest.mock()`](https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options) and similar functions are automatically hoisted to the top. If your project uses Babel, its configuration will be read and used to transpile code.
    - Setups transforms for common files, such as images and files.
- **Coverage**: Enables coverage for CI, a feature supported by [`ci-info`](https://github.com/watson/ci-info), which you can check for information about supported CI services.
- **Coverage thresholds**: For a good balance between strict but workable thresholds.
- **Snapshot serializing**: To remove absolute paths from your snapshots, reducing conflicts in CI.

## Usage

Create `jest.config.js` at the root of your project:

```js
'use strict';

const { baseConfig } = require('@moxy/jest-config-base');

module.exports = baseConfig();
```

The `baseConfig` function accepts an optional parameter that allows to specify the Jest environment, which can be `jsdom` (default) or `node`. As an example, for Node.js projects you would use like so:

```js
const { baseConfig } = require('@moxy/jest-config');

module.exports = baseConfig('node');
```

Alternatively, you may pass a path to a custom environment. In fact, we offer the following custom environments:

<details>
  <summary><code>@moxy/jest-config/environments/node-single-context</code></summary>

  Special Node environment class for Jest which runs all scripts in the same context. This effectively disables the sandbox isolation to circumvent issues with Jest's [sandboxing](https://github.com/facebook/jest/issues/2549), which causes subtle bugs in specific situations, such as in code that relies in `instanceof` checks.

  ```js
  'use strict';

  const { baseConfig } = require('@moxy/jest-config');

  module.exports = baseConfig('@moxy/jest-config/environments/node-single-context');
  ```

  > ⚠️ Only activate this environment if you are having problems with the aforementioned issue, and before trying other workarounds.
</details>

### Composing enhancers

To use enhancers, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration! Here's an example of using `compose`:

```js
'use strict';

const { compose, baseConfig } = require('@moxy/jest-config-base');
const withMyEnhancer = require('<your-own-enhancer>');

module.exports = compose(
    baseConfig(),
    withMyEnhancer(),
);
```

Enhancers are functions which accept a single argument, i.e., Jest's config object, and return the enhanced config. You may also use `compose` to add your own inline enhancer:

```js
'use strict';

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
'use strict';

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
