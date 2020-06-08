# jest-config-web

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/jest-config-web
[npm-image]:https://img.shields.io/npm/v/@moxy/jest-config-web.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/jest-config-web.svg
[david-dm-url]:https://david-dm.org/moxystudio/jest-config?path=packages/jest-config-web
[david-dm-image]:https://img.shields.io/david/moxystudio/jest-config.svg?path=packages/jest-config-web
[david-dm-dev-url]:https://david-dm.org/moxystudio/jest-config?type=dev&path=packages/jest-config-web
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/jest-config.svg?path=packages/jest-config-web

MOXY's [Jest](https://jestjs.io/) configuration **enhancer** for Web projects.

## Installation

```sh
$ npm install --save-dev jest @moxy/jest-config-base @moxy/jest-config-web
```

This package should be used in conjunction with `@moxy/jest-config-base`.

## What's included?

- **Transform**: Allows importing common files used for the web, such as fonts, images and videos. It also maps files ending in `.data-url.<ext>` and `.inline.<ext>` into their base64 data URL and raw content respectively, a convention we are using in [next-with-moxy](https://www.github.com/moxystudio/next-with-moxy) and other Webpack based projects.
- **Module name mapping:** Maps `.css` files to an identity object, to correctly mock `className` lookups when using CSS Modules.

## Usage

To use this enhancer, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration!

```js
const { compose, baseConfig } = require('@moxy/jest-config-base');
const withWeb = require('@moxy/jest-config-web');

module.exports = compose(
    baseConfig(),
    withWeb(),
);
```
