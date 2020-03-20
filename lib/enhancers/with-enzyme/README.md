# withEnzyme

An addon for [`jest-config`](https://www.github.com/moxystudio/jest-config) for projects developed with [Enzyme](https://github.com/airbnb/enzyme).

## Usage

To use enhancers, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the default configuration, `baseConfig`! Here's an example of using `compose` to include this addon:

```js
const { compose, baseConfig, withEnzyme } = require('@moxy/jest-config');

module.exports = compose([
    baseConfig,
    withEnzyme('enzyme-adapter-react-16'))
]);
```

⚠️ Note that you **must install the Enzyme adapter** yourself and pass it to `withEnzyme`.

## What's included in `withEnzyme`?

- **Automatic adapter setup**: Setups the enzyme adapter automatically based on the desired one.
- **Wrapper snapshotting**: Ability to snapshot Enzyme wrappers by using [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json).
- **Extended matchers**: Make DOM assertions easier and clearer by using `jest-enzyme` [matchers](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#assertions).
