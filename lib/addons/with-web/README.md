# withWeb

An addon for [jest-config](https://www.github.com/moxystudio/jest-config) for projects developed with [next-with-moxy](https://www.github.com/moxystudio/next-with-moxy).

## Usage

To use addons, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the default configuration, `baseConfig`! Here's an example of using `compose` to include this addon:

```js
const { compose, baseConfig, withWeb } = require('@moxy/jest-config');

module.exports = compose([baseConfig, withWeb]);
```

## What's included in `withWeb`?

This addon adds configurations to our base configuration to help develop projects using [next-with-moxy](https://www.github.com/moxystudio/next-with-moxy):

- **Transform:** Includes preprocessors for data-url file imports and inline file content imports. Note, we're using [next-with-moxy](https://www.github.com/moxystudio/next-with-moxy) naming conventions to know which files to process with each preprocessor.
- **Coverage collection and ignore patterns:** Conforming to the folder and naming conventions of [next-with-moxy](https://www.github.com/moxystudio/next-with-moxy).
