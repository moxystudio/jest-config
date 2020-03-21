# withWeb

An enhancer for web projects, typically end-projects that work in the browser.

## What's included?

- **Transform**: Allows importing common files used for the web, such as fonts, images and videos. It also maps files ending in `.data-url.<ext>` and `.inline.<ext>` into their base64 data URL and raw content respectively, a convention we are using in [next-with-moxy](https://www.github.com/moxystudio/next-with-moxy) and other Webpack based projects.
- **Module name mapping:** Maps `.css` files to an identity object, to correctly mock `className` lookups when using CSS Modules.

## Usage

To use this enhancer, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration!

```js
const { compose, baseConfig, withWeb } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig(),
    withWeb(),
);
```
