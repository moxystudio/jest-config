# withEnzyme

An enhancer for projects tested with [Enzyme](https://github.com/airbnb/enzyme).

## What's included?

- **Automatic adapter setup**: Setups the enzyme adapter automatically based on the desired one.
- **Wrapper snapshotting**: Ability to snapshot Enzyme wrappers by using [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json).
- **Extended matchers (web)**: Make DOM assertions easier and clearer by using `jest-enzyme` [matchers](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#assertions).
- **Ignore certain warnings and errors (react-native)**: [Ignore warnings and errors](https://github.com/enzymejs/enzyme/issues/831) produced by React due to the fact that we are using JSDOM in React Native, as [prescribed](https://enzymejs.github.io/enzyme/docs/guides/react-native.html) by Enzyme.

## Usage

To use this enhancer, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration!

```js
const { compose, baseConfig, withEnzyme } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig(),
    withEnzyme('enzyme-adapter-react-16', 'web'),
);
```

The enhancer factory has two parameters:

- `adapter`: The adapter module to use.
- `target`: The target, which can be either `web` or `react-native`.

⚠️ Note that you **must install** the Enzyme adapter yourself. In the example above, you would have to install `enzyme-adapter-react-16`:

```sh
$ npm install --save-dev enzyme-adapter-react-16
```

