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
$ npm install --save-dev @moxy/jest-config
```


## Usage

Create `jest.config.js` at the root of your project:

```js
const { baseConfig } = require('@moxy/jest-config')

module.exports = baseConfig();
```

### What's included in `baseConfig`?

Our `baseConfig` has project agnostic configurations, meant to help any project regardless of their purpose, including;
- **Transform**: Preprocessors for `.js` files as well as other common filetypes.
- **Module name mapping:** For `.css` files, to correctly mock `className` lookups when using CSS Modules.
- **Coverage**: By default, coverage is only verified in CI. This feature is supported by [`ci-info`](https://github.com/watson/ci-info), which you can check for information about supported CI services.
- **Coverage thresholds:** For a good balance  between strict but workable thresholds.
- **Snapshot serializing:** To remove absolute paths from your snapshots, reducing conflicts with in CI.

## Addons

This packages comes with extra addons that further tweak the base Jest configuration to cover the needs of common situations. Here's a list of all addons we offer so far:

| Addon | Description |
| :---: | --- |
| [withWeb](addons/with-web/) | Adds setup and ignore patterns we use in [`next-with-moxy`](https://www.github.com/moxystudio/next-with-moxy) |
| [withRTL](addons/with-rtl/) | Adds setup for projects using [React Testing Library](https://github.com/testing-library/react-testing-library). |

To use addons, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the default configuration, `baseConfig`! Here's an example of using `compose`:

```js
const { compose, baseConfig, withWeb } = require('@moxy/jest-config');

module.exports = compose([baseConfig, withWeb]);
```

If you want to make your own addon, you can! It just needs to have the following structure:

```js
const { compose, baseConfig } = require('@moxy/jest-config');

// Receives previous configuration
const withAddon = (configuration) => {
    // Add your options to configuration
    // For example, do not test '.data.js' files
    configuration.testPathIgnorePatterns = ['/.*.data.js$/'];

    // Returns configuration with added options
    return configuration;
};

module.exports = compose([baseConfig, withAddon]);
```

### Without addons

If you want to add your own options without using our addons or making your own, you may imperatively change the returned base config like so:

```js
const { baseConfig } = require('@moxy/jest-config');

const myConfig = baseConfig();

// Do not test '.data.js' files
myConfig.testPathIgnorePatterns = ['/.*.data.js$/'];

module.exports = myConfig;
```


## Tests

Any parameter passed to the `test` command is passed down to Jest.

```sh
$ npm t
$ npm t -- --watch  # To run watch mode
```


## License

Released under the [MIT License](https://opensource.org/licenses/mit-license.php).
